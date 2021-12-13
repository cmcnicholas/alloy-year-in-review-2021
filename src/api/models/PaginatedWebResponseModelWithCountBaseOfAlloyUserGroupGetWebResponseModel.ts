/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfAlloyUserGroupGetWebResponseModel } from './PaginatedWebResponseModelBaseOfAlloyUserGroupGetWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfAlloyUserGroupGetWebResponseModel =
  PaginatedWebResponseModelBaseOfAlloyUserGroupGetWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfAlloyUserGroupGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfAlloyUserGroupGetWebResponseModel';
}
