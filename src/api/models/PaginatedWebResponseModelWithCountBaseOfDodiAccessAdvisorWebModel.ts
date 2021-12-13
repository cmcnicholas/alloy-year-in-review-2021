/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfDodiAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfDodiAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfDodiAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfDodiAccessAdvisorWebModel';
}
