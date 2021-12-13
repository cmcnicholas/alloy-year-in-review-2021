/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfCardAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfCardAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfCardAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfCardAccessAdvisorWebModel';
}
