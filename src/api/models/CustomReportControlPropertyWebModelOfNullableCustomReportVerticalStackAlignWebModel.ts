/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { CustomReportVerticalStackAlignWebModel } from './CustomReportVerticalStackAlignWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableCustomReportVerticalStackAlignWebModel = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: CustomReportVerticalStackAlignWebModel | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableCustomReportVerticalStackAlignWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'CustomReportControlPropertyWebModelOfNullableCustomReportVerticalStackAlignWebModel';
}
