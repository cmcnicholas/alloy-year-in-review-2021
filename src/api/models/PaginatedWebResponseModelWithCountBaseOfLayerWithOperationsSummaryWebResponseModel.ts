/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfLayerWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfLayerWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfLayerWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfLayerWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfLayerWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfLayerWithOperationsSummaryWebResponseModel';
}
