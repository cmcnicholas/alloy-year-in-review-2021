/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { HorizontalStackAlign } from './HorizontalStackAlign';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableHorizontalStackAlign = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: HorizontalStackAlign | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableHorizontalStackAlign {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableHorizontalStackAlign';
}
