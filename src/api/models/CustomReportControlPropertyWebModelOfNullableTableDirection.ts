/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { TableDirection } from './TableDirection';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableTableDirection = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: TableDirection | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableTableDirection {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyWebModelOfNullableTableDirection';
}
