/* eslint-disable */

import type { CustomReportDataSourceHeaderWebModel } from './CustomReportDataSourceHeaderWebModel';
import type { DataSourceHeaderSortDataWebModel } from './DataSourceHeaderSortDataWebModel';

/**
 * Web model for a custom report data source
 */
export type CustomReportDataSourceWebModelBase = {
  /**
   * The unique data source code
   */
  code: string;
  /**
   * The list of columns that will be used for sorting.
   */
  headersSortData?: Array<DataSourceHeaderSortDataWebModel> | null;
  /**
   * The data source name
   */
  name: string;
  /**
   * The data source headers which describe the columns available in this data source.
   * These are useful to assign a specific header/column to a specific property in a control
   */
  headers?: Array<CustomReportDataSourceHeaderWebModel> | null;
  discriminator: string;
};

export namespace CustomReportDataSourceWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDataSourceWebModelBase';
}
