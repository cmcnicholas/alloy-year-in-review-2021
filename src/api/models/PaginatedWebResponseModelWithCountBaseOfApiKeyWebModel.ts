/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfApiKeyWebModel } from './PaginatedWebResponseModelBaseOfApiKeyWebModel';

export type PaginatedWebResponseModelWithCountBaseOfApiKeyWebModel =
  PaginatedWebResponseModelBaseOfApiKeyWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfApiKeyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfApiKeyWebModel';
}
