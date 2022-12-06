/* eslint-disable */

import type { CustomReportSortingOrderWebModel } from './CustomReportSortingOrderWebModel';

/**
 * Header sort date web model
 */
export type DataSourceHeaderSortDataWebModel = {
  /**
   * Name
   */
  headerName: string;
  /**
   * Whether the sorting is ascending or descending
   */
  sortingOrder: CustomReportSortingOrderWebModel;
};

export namespace DataSourceHeaderSortDataWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DataSourceHeaderSortDataWebModel';
}
