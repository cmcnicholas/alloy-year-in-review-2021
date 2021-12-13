/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfCustomReportWebModel = {
  /**
   * The page number where data was loaded (1 based)
   */
  page: number;
  /**
   * The number of results being returned per page
   */
  pageSize: number;
  /**
   * The results for the request
   */
  results: Array<CustomReportWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfCustomReportWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfCustomReportWebModel';
}
