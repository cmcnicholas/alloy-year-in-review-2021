/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfMeshWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfMeshWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfMeshWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfMeshWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfMeshWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfMeshWithOperationsSummaryWebResponseModel';
}
