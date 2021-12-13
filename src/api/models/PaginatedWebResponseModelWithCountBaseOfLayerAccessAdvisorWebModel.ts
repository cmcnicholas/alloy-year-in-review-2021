/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfLayerAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfLayerAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfLayerAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfLayerAccessAdvisorWebModel';
}
