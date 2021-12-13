/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfAlloyRoleGetWebResponseModel } from './PaginatedWebResponseModelBaseOfAlloyRoleGetWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfAlloyRoleGetWebResponseModel =
  PaginatedWebResponseModelBaseOfAlloyRoleGetWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfAlloyRoleGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfAlloyRoleGetWebResponseModel';
}
