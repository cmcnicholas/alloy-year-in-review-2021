/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfBasemapWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfBasemapWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfBasemapWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfBasemapWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfBasemapWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfBasemapWithOperationsSummaryWebResponseModel';
}
