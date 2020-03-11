import { expect } from 'chai';
import BpmnJsonParser from '../../../../../src/component/parser/json/BpmnJsonParser';
import { ShapeBpmnElementKind } from '../../../../../src/model/bpmn/shape/ShapeBpmnElementKind';

describe('parse bpmn as json', () => {
  describe('start event', () => {
    it('json containing one process with a single start event', () => {
      const json = `{
                "definitions" : {
                    "process": {
                        "startEvent": {
                            "id":"event_id_0",
                            "name":"event name"
                        }
                    },
                    "BPMNDiagram": {
                        "name":"process 0",
                        "BPMNPlane": {
                            "BPMNShape": {
                                "id":"shape_startEvent_id_0",
                                "bpmnElement":"event_id_0",
                                "Bounds": { "x": 362, "y": 232, "width": 36, "height": 45 }
                            }
                        }
                    }
                }
            }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.shapes).to.have.lengthOf(1, 'shapes');
      expect(model.shapes[0].id).to.be.equal('shape_startEvent_id_0', 'shape id');

      const bpmnElement = model.shapes[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('event_id_0', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('event name', 'bpmn element name');
      expect(bpmnElement.kind).to.be.equal(ShapeBpmnElementKind.EVENT_START, 'bpmn element kind');

      const bounds = model.shapes[0].bounds;
      expect(bounds.x).to.be.equal(362, 'bounds x');
      expect(bounds.y).to.be.equal(232, 'bounds y');
      expect(bounds.width).to.be.equal(36, 'bounds width');
      expect(bounds.height).to.be.equal(45, 'bounds height');
    });

    it('json containing one process declared as array with a single start event', () => {
      const json = `{
                "definitions": {
                    "process": [
                        {
                            "startEvent": {
                                "id":"event_id_1",
                                "name":"event name"
                            }
                        }
                    ],
                    "BPMNDiagram": {
                        "name":"process 0",
                        "BPMNPlane": {
                            "BPMNShape": {
                                "id":"shape_startEvent_id_1",
                                "bpmnElement":"event_id_1",
                                "Bounds": { "x": 362, "y": 232, "width": 36, "height": 45 }
                            }
                        }
                    }
                }
            }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.shapes).to.have.lengthOf(1, 'shapes');
      expect(model.shapes[0].id).to.be.equal('shape_startEvent_id_1', 'shape id');

      const bpmnElement = model.shapes[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('event_id_1', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('event name', 'bpmn element name');
      expect(bpmnElement.kind).to.be.equal(ShapeBpmnElementKind.EVENT_START, 'bpmn element kind');

      const bounds = model.shapes[0].bounds;
      expect(bounds.x).to.be.equal(362, 'bounds x');
      expect(bounds.y).to.be.equal(232, 'bounds y');
      expect(bounds.width).to.be.equal(36, 'bounds width');
      expect(bounds.height).to.be.equal(45, 'bounds height');
    });

    it('json containing one process with an array of start events', () => {
      const json = `{
                "definitions" : {
                    "process": {
                        "startEvent": [
                          {
                              "id":"event_id_0",
                              "name":"event name"
                          }
                        ]
                    },
                    "BPMNDiagram": {
                        "name":"process 0",
                        "BPMNPlane": {
                            "BPMNShape": [
                              {
                                "id":"shape_startEvent_id_0",
                                "bpmnElement":"event_id_0",
                                "Bounds": { "x": 362, "y": 232, "width": 36, "height": 45 }
                              }
                            ]
                        }
                    }
                }
            }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.shapes).to.have.lengthOf(1, 'shapes');
      expect(model.shapes[0].id).to.be.equal('shape_startEvent_id_0', 'shape id');

      const bpmnElement = model.shapes[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('event_id_0', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('event name', 'bpmn element name');
      expect(bpmnElement.kind).to.be.equal(ShapeBpmnElementKind.EVENT_START, 'bpmn element kind');

      const bounds = model.shapes[0].bounds;
      expect(bounds.x).to.be.equal(362, 'bounds x');
      expect(bounds.y).to.be.equal(232, 'bounds y');
      expect(bounds.width).to.be.equal(36, 'bounds width');
      expect(bounds.height).to.be.equal(45, 'bounds height');
    });
  });
  describe('user task', () => {
    it('json containing one process with a single user task', () => {
      const json = `{
                "definitions" : {
                    "process": {
                        "userTask": {
                            "id":"userTask_id_0",
                            "name":"userTask name"
                        }
                    },
                    "BPMNDiagram": {
                        "name":"process 0",
                        "BPMNPlane": {
                            "BPMNShape": {
                                "id":"shape_userTask_id_0",
                                "bpmnElement":"userTask_id_0",
                                "Bounds": { "x": 362, "y": 232, "width": 36, "height": 45 }
                            }
                        }
                    }
                }
            }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.shapes).to.have.lengthOf(1, 'shapes');
      expect(model.shapes[0].id).to.be.equal('shape_userTask_id_0', 'shape id');

      const bpmnElement = model.shapes[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('userTask_id_0', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('userTask name', 'bpmn element name');
      expect(bpmnElement.kind).to.be.equal(ShapeBpmnElementKind.TASK_USER, 'bpmn element kind');

      const bounds = model.shapes[0].bounds;
      expect(bounds.x).to.be.equal(362, 'bounds x');
      expect(bounds.y).to.be.equal(232, 'bounds y');
      expect(bounds.width).to.be.equal(36, 'bounds width');
      expect(bounds.height).to.be.equal(45, 'bounds height');
    });

    it('json containing one process declared as array with a single user task', () => {
      const json = `{
                "definitions": {
                    "process": [
                        {
                            "userTask": {
                                "id":"userTask_id_1",
                                "name":"userTask name"
                            }
                        }
                    ],
                    "BPMNDiagram": {
                        "name":"process 0",
                        "BPMNPlane": {
                            "BPMNShape": {
                                "id":"shape_userTask_id_1",
                                "bpmnElement":"userTask_id_1",
                                "Bounds": { "x": 362, "y": 232, "width": 36, "height": 45 }
                            }
                        }
                    }
                }
            }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.shapes).to.have.lengthOf(1, 'shapes');
      expect(model.shapes[0].id).to.be.equal('shape_userTask_id_1', 'shape id');

      const bpmnElement = model.shapes[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('userTask_id_1', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('userTask name', 'bpmn element name');
      expect(bpmnElement.kind).to.be.equal(ShapeBpmnElementKind.TASK_USER, 'bpmn element kind');

      const bounds = model.shapes[0].bounds;
      expect(bounds.x).to.be.equal(362, 'bounds x');
      expect(bounds.y).to.be.equal(232, 'bounds y');
      expect(bounds.width).to.be.equal(36, 'bounds width');
      expect(bounds.height).to.be.equal(45, 'bounds height');
    });

    it('json containing one process with an array of user tasks', () => {
      const json = `{
                "definitions" : {
                    "process": {
                        "userTask": [
                          {
                              "id":"userTask_id_0",
                              "name":"userTask name"
                          }
                        ]
                    },
                    "BPMNDiagram": {
                        "name":"process 0",
                        "BPMNPlane": {
                            "BPMNShape": [
                              {
                                "id":"shape_userTask_id_0",
                                "bpmnElement":"userTask_id_0",
                                "Bounds": { "x": 362, "y": 232, "width": 36, "height": 45 }
                              }
                            ]
                        }
                    }
                }
            }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.shapes).to.have.lengthOf(1, 'shapes');
      expect(model.shapes[0].id).to.be.equal('shape_userTask_id_0', 'shape id');

      const bpmnElement = model.shapes[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('userTask_id_0', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('userTask name', 'bpmn element name');
      expect(bpmnElement.kind).to.be.equal(ShapeBpmnElementKind.TASK_USER, 'bpmn element kind');

      const bounds = model.shapes[0].bounds;
      expect(bounds.x).to.be.equal(362, 'bounds x');
      expect(bounds.y).to.be.equal(232, 'bounds y');
      expect(bounds.width).to.be.equal(36, 'bounds width');
      expect(bounds.height).to.be.equal(45, 'bounds height');
    });
  });
  describe('sequence flow', () => {
    it('json containing one process with a single sequence flow', () => {
      const json = `{
          "definitions": {
              "process": {
                  "id": "Process_1",
                  "sequenceFlow": {
                      "id": "sequenceFlow_id_0",
                      "name": "label 1",
                      "sourceRef": "sourceRef_id_xsdas",
                      "targetRef": "targetRef_RLk"
                  }
              },
              "BPMNDiagram": {
                  "id": "BpmnDiagram_1",
                  "BPMNPlane": {
                      "id": "BpmnPlane_1",
                      "BPMNEdge": {
                          "id": "edge_sequenceFlow_id_0",
                          "bpmnElement": "sequenceFlow_id_0"
                      }
                  }
              }
          }
      }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.edges).to.have.lengthOf(1, 'edges');
      expect(model.edges[0].id).to.be.equal('edge_sequenceFlow_id_0', 'edges id');

      const bpmnElement = model.edges[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('sequenceFlow_id_0', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('label 1', 'bpmn element name');
      expect(bpmnElement.sourceRefId).to.be.equal('sourceRef_id_xsdas', 'bpmn element sourceRef');
      expect(bpmnElement.targetRefId).to.be.equal('targetRef_RLk', 'bpmn element targetRef');
    });

    it('json containing one process declared as array with a single sequence flow', () => {
      const json = `{
          "definitions": {
              "process": [{
                  "id": "Process_1",
                  "sequenceFlow": {
                      "id": "sequenceFlow_id_0",
                      "name": "label 1",
                      "sourceRef": "sourceRef_id_xsdas",
                      "targetRef": "targetRef_RLk"
                  }
              }],
              "BPMNDiagram": {
                  "id": "BpmnDiagram_1",
                  "BPMNPlane": {
                      "id": "BpmnPlane_1",
                      "BPMNEdge": {
                          "id": "edge_sequenceFlow_id_0",
                          "bpmnElement": "sequenceFlow_id_0"
                      }
                  }
              }
          }
      }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.edges).to.have.lengthOf(1, 'edges');
      expect(model.edges[0].id).to.be.equal('edge_sequenceFlow_id_0', 'edges id');

      const bpmnElement = model.edges[0].bpmnElement;
      expect(bpmnElement.id).to.be.equal('sequenceFlow_id_0', 'bpmn element id');
      expect(bpmnElement.name).to.be.equal('label 1', 'bpmn element name');
      expect(bpmnElement.sourceRefId).to.be.equal('sourceRef_id_xsdas', 'bpmn element sourceRef');
      expect(bpmnElement.targetRefId).to.be.equal('targetRef_RLk', 'bpmn element targetRef');
    });

    it('json containing one process with an array of sequence flows with name & without name', () => {
      const json = `{
          "definitions": {
              "process": {
                  "id": "Process_1",
                  "sequenceFlow": [{
                      "id": "sequenceFlow_id_0",
                      "name": "label 1",
                      "sourceRef": "sourceRef_id_xsdas",
                      "targetRef": "targetRef_RLk"
                  },{
                      "id": "sequenceFlow_id_1",
                      "sourceRef": "sequenceFlow_id_1",
                      "targetRef": "targetRef_1"
                  }]
              },
              "BPMNDiagram": {
                  "id": "BpmnDiagram_1",
                  "BPMNPlane": {
                      "id": "BpmnPlane_1",
                      "BPMNEdge": [{
                          "id": "edge_sequenceFlow_id_0",
                          "bpmnElement": "sequenceFlow_id_0"
                      },{
                          "id": "edge_sequenceFlow_id_1",
                          "bpmnElement": "sequenceFlow_id_1"
                      }]
                  }
              }
          }
      }`;

      const model = BpmnJsonParser.parse(JSON.parse(json));

      expect(model.edges).to.have.lengthOf(2, 'edges');
      expect(model.edges[0].id).to.be.equal('edge_sequenceFlow_id_0', 'edges id');

      const bpmnElementWithName = model.edges[0].bpmnElement;
      expect(bpmnElementWithName.id).to.be.equal('sequenceFlow_id_0', 'bpmn element id');
      expect(bpmnElementWithName.name).to.be.equal('label 1', 'bpmn element name');
      expect(bpmnElementWithName.sourceRefId).to.be.equal('sourceRef_id_xsdas', 'bpmn element sourceRef');
      expect(bpmnElementWithName.targetRefId).to.be.equal('targetRef_RLk', 'bpmn element targetRef');

      const bpmnElementWithoutName = model.edges[1].bpmnElement;
      expect(bpmnElementWithoutName.id).to.be.equal('sequenceFlow_id_1', 'bpmn element id');
      expect(bpmnElementWithoutName.sourceRefId).to.be.equal('sequenceFlow_id_1', 'bpmn element sourceRef');
      expect(bpmnElementWithoutName.targetRefId).to.be.equal('targetRef_1', 'bpmn element targetRef');
    });
  });
});
