/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfCustomerWebModel } from './PaginatedWebResponseModelBaseOfCustomerWebModel';

export type PaginatedWebResponseModelWithCountBaseOfCustomerWebModel =
  PaginatedWebResponseModelBaseOfCustomerWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfCustomerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfCustomerWebModel';
}
