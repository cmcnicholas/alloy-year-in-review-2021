/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { Margin } from './Margin';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableMargin = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: Margin | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableMargin {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableMargin';
}
