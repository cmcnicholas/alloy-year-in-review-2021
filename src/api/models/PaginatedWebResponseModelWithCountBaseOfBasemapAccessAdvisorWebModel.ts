/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfBasemapAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfBasemapAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfBasemapAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfBasemapAccessAdvisorWebModel';
}
