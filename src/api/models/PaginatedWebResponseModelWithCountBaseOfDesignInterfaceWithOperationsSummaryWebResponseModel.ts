/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfDesignInterfaceWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfDesignInterfaceWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfDesignInterfaceWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfDesignInterfaceWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfDesignInterfaceWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfDesignInterfaceWithOperationsSummaryWebResponseModel';
}
