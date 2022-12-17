/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfApplicableFromResultWebModelBase } from './PaginatedWebResponseModelBaseOfApplicableFromResultWebModelBase';

export type PaginatedWebResponseModelWithCountBaseOfApplicableFromResultWebModelBase =
  PaginatedWebResponseModelBaseOfApplicableFromResultWebModelBase & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfApplicableFromResultWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfApplicableFromResultWebModelBase';
}
