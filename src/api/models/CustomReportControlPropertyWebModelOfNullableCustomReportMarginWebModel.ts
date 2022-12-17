/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { CustomReportMarginWebModel } from './CustomReportMarginWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: CustomReportMarginWebModel | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel';
}
