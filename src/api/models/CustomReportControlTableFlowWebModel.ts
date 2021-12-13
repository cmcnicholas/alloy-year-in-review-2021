/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfNullableHeaderType } from './CustomReportControlPropertyWebModelOfNullableHeaderType';
import type { CustomReportControlPropertyWebModelOfNullableTableDirection } from './CustomReportControlPropertyWebModelOfNullableTableDirection';
import type { CustomReportControlTableHeaderFlowWebModel } from './CustomReportControlTableHeaderFlowWebModel';

export type CustomReportControlTableFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The code of the data source connected to this table control
   */
  dataSource?: string | null;
  /**
   * The table headers
   */
  headers?: Array<CustomReportControlTableHeaderFlowWebModel> | null;
  /**
   * The table direction
   */
  direction?: CustomReportControlPropertyWebModelOfNullableTableDirection | null;
  /**
   * The type of header to use for default data source column names
   */
  headerType?: CustomReportControlPropertyWebModelOfNullableHeaderType | null;
};

export namespace CustomReportControlTableFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableFlowWebModel';
}
