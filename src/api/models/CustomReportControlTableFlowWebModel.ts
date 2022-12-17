/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfNullableCustomReportHeaderTypeWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportHeaderTypeWebModel';
import type { CustomReportControlPropertyWebModelOfNullableCustomReportTableDirectionWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportTableDirectionWebModel';
import type { CustomReportControlTableFlowSummaryWebModel } from './CustomReportControlTableFlowSummaryWebModel';
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
   * Summary data regarding on what mathematical operations to apply to headers
   */
  summary?: CustomReportControlTableFlowSummaryWebModel | null;
  /**
   * The table direction
   */
  direction?: CustomReportControlPropertyWebModelOfNullableCustomReportTableDirectionWebModel | null;
  /**
   * The type of header to use for default data source column names
   */
  headerType?: CustomReportControlPropertyWebModelOfNullableCustomReportHeaderTypeWebModel | null;
};

export namespace CustomReportControlTableFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableFlowWebModel';
}
