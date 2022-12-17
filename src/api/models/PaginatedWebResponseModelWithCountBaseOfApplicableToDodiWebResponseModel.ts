/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfApplicableToDodiWebResponseModel } from './PaginatedWebResponseModelBaseOfApplicableToDodiWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfApplicableToDodiWebResponseModel =
  PaginatedWebResponseModelBaseOfApplicableToDodiWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfApplicableToDodiWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfApplicableToDodiWebResponseModel';
}
