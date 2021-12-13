/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfNullableHeaderType } from './CustomReportControlPropertyWebModelOfNullableHeaderType';
import type { CustomReportControlTableHeaderTabularWebModel } from './CustomReportControlTableHeaderTabularWebModel';
import type { CustomReportControlTabularWebModelBase } from './CustomReportControlTabularWebModelBase';

export type CustomReportControlTableTabularWebModel = CustomReportControlTabularWebModelBase & {
  /**
   * The code of the data source connected to this table control
   */
  dataSource?: string | null;
  /**
   * The table headers
   */
  headers?: Array<CustomReportControlTableHeaderTabularWebModel> | null;
  /**
   * The type of header to use for default data source column names
   */
  headerType?: CustomReportControlPropertyWebModelOfNullableHeaderType | null;
};

export namespace CustomReportControlTableTabularWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableTabularWebModel';
}
