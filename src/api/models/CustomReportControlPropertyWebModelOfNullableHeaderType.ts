/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { HeaderType } from './HeaderType';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableHeaderType = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: HeaderType | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableHeaderType {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableHeaderType';
}
