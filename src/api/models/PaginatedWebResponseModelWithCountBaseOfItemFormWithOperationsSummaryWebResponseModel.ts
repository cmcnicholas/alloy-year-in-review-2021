/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfItemFormWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfItemFormWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfItemFormWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfItemFormWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfItemFormWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfItemFormWithOperationsSummaryWebResponseModel';
}
