import {
  flowRendererV2,
  flowStyles
} from "./chunk-RTEKTBOG.js";
import {
  flowDb,
  parser$1
} from "./chunk-AJLE6NK3.js";
import "./chunk-DIKZ3V24.js";
import "./chunk-OC5XQ5L5.js";
import "./chunk-SRQVIJNO.js";
import "./chunk-OQIE7IAR.js";
import "./chunk-6PPKKFAU.js";
import "./chunk-ORH2KA2I.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-GB22KOAE.js";
import {
  __toESM
} from "./chunk-TFWDKVI3.js";

// node_modules/mermaid/dist/flowDiagram-v2-476db779.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-476db779-DI4UHD7X.js.map
