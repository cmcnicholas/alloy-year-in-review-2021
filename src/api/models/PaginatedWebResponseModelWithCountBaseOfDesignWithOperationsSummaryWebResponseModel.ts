/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfDesignWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfDesignWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfDesignWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfDesignWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfDesignWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfDesignWithOperationsSummaryWebResponseModel';
}
