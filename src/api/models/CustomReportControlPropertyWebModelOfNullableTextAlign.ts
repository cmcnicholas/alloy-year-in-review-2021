/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { TextAlign } from './TextAlign';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableTextAlign = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: TextAlign | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableTextAlign {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableTextAlign';
}
