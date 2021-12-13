/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { RelativeWidth } from './RelativeWidth';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableRelativeWidth = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: RelativeWidth | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableRelativeWidth {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableRelativeWidth';
}
