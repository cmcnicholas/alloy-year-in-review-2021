/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfCardWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfCardWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfCardWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfCardWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfCardWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfCardWithOperationsSummaryWebResponseModel';
}
