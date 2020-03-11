import MxGraphConfigurator from '../mxgraph/MxGraphConfigurator';
import BpmnJsonParser from '../parser/json/BpmnJsonParser';
import BpmnXmlParser from '../parser/xml/BpmnXmlParser';
import { mxgraph, mxgraphFactory } from 'ts-mxgraph';
import MxGraphConverter from '../mxgraph/MxGraphConverter';

const { mxClient, mxUtils, mxGraph, mxGraphModel, mxShape, mxSvgCanvas2D } = mxgraphFactory({
  mxLoadResources: false,
  mxLoadStylesheets: false,
});

class MySvgCanvas2D extends mxSvgCanvas2D {
  public minStrokeWidth: number;
  constructor(root: any, styleEnabled?: any) {
    super(root, styleEnabled);
  }
  addNode(filled: any, stroked: any): void {
    console.log(this);
    super.addNode(filled, stroked);
    console.log('ADDING NODE FROM EXT');
  }
}

mxShape.prototype.createSvgCanvas = function() {
  console.log(this);
  console.log(this.state.cell.id);
  console.log(this.state.cell.style);
  const canvas = new MySvgCanvas2D(this.node, false);
  canvas.strokeTolerance = this.pointerEvents ? this.svgStrokeTolerance : 0;
  canvas.pointerEventsValue = this.svgPointerEvents;
  canvas.blockImagePointerEvents = mxClient.IS_FF;
  const off = this.getSvgScreenOffset();

  if (off != 0) {
    this.node.setAttribute('transform', 'translate(' + off + ',' + off + ')');
  } else {
    this.node.removeAttribute('transform');
  }

  //
  this.node.setAttribute('class', 'class-state-cell-style-' + this.state.cell.style);
  this.node.setAttribute('data-cell-id', this.state.cell.id);
  //
  canvas.minStrokeWidth = this.minSvgStrokeWidth;

  if (!this.antiAlias) {
    // Rounds all numbers in the SVG output to integers
    canvas.format = function(value) {
      return Math.round(parseFloat(value));
    };
  }

  return canvas;
};

export default class Graph {
  readonly graph: mxgraph.mxGraph;

  constructor(protected container: Element) {
    try {
      if (!mxClient.isBrowserSupported()) {
        mxUtils.error('Browser is not supported!', 200, false);
      }
      // Instantiate Graph
      this.graph = new mxGraph(this.container, new mxGraphModel());

      new MxGraphConfigurator(this.graph).configureStyles();
    } catch (e) {
      mxUtils.alert('Cannot start application: ' + e.message);
      throw e;
    }
  }

  public load(xml: string): void {
    const json = new BpmnXmlParser().parse(xml);
    const { shapes, edges } = BpmnJsonParser.parse(json);

    const model = this.graph.getModel();
    model.clear(); // ensure to remove manual changes or already loaded graphs
    model.beginUpdate();
    try {
      new MxGraphConverter(this.graph).insertShapes(shapes).insertEdges(edges);
    } catch (e) {
      mxUtils.alert('Cannot load bpmn diagram: ' + e.message);
      throw e;
    } finally {
      model.endUpdate();
    }
  }
}
