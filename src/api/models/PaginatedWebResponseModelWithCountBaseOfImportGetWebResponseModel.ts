/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfImportGetWebResponseModel } from './PaginatedWebResponseModelBaseOfImportGetWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfImportGetWebResponseModel =
  PaginatedWebResponseModelBaseOfImportGetWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfImportGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfImportGetWebResponseModel';
}
