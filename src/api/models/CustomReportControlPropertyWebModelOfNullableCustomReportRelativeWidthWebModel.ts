/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { CustomReportRelativeWidthWebModel } from './CustomReportRelativeWidthWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableCustomReportRelativeWidthWebModel = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: CustomReportRelativeWidthWebModel | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableCustomReportRelativeWidthWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'CustomReportControlPropertyWebModelOfNullableCustomReportRelativeWidthWebModel';
}
