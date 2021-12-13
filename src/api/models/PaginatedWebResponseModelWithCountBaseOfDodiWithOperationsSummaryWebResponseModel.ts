/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfDodiWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfDodiWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfDodiWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfDodiWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfDodiWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfDodiWithOperationsSummaryWebResponseModel';
}
