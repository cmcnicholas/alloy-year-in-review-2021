/* eslint-disable */

import type { BoundingBoxWebModel } from './BoundingBoxWebModel';
import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfBoundingBoxWebModel = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: BoundingBoxWebModel | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfBoundingBoxWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfBoundingBoxWebModel';
}
