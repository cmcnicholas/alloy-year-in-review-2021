/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { TextStyle } from './TextStyle';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableTextStyle = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: TextStyle | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableTextStyle {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableTextStyle';
}
