/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { CustomReportTextAlignWebModel } from './CustomReportTextAlignWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableCustomReportTextAlignWebModel = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: CustomReportTextAlignWebModel | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableCustomReportTextAlignWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'CustomReportControlPropertyWebModelOfNullableCustomReportTextAlignWebModel';
}
