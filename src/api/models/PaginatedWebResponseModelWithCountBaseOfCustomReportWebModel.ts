/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfCustomReportWebModel } from './PaginatedWebResponseModelBaseOfCustomReportWebModel';

export type PaginatedWebResponseModelWithCountBaseOfCustomReportWebModel =
  PaginatedWebResponseModelBaseOfCustomReportWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfCustomReportWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfCustomReportWebModel';
}
