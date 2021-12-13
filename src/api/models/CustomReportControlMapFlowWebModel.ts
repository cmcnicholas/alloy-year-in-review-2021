/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfBoundingBoxWebModel } from './CustomReportControlPropertyWebModelOfBoundingBoxWebModel';

export type CustomReportControlMapFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The Guc of the data source the map items have to be read from
   */
  dataSourceCode?: string | null;
  /**
   * The colour of the item on the map
   */
  colourColumnId?: string | null;
  /**
   * The icon of the item on the map
   */
  iconColumnId?: string | null;
  /**
   * The geometry of the item on the map
   */
  geometryColumnId?: string | null;
  /**
   * The map will be restricted to this bounding box.
   * Moreover, for an Aqs map component, it will act as an additional condition to the provided Aqs query
   */
  boundingBox?: CustomReportControlPropertyWebModelOfBoundingBoxWebModel | null;
};

export namespace CustomReportControlMapFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlMapFlowWebModel';
}
