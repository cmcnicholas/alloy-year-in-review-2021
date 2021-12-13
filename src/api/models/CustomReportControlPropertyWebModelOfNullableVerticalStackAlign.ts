/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { VerticalStackAlign } from './VerticalStackAlign';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableVerticalStackAlign = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: VerticalStackAlign | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableVerticalStackAlign {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableVerticalStackAlign';
}
