/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfItemFormAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfItemFormAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfItemFormAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfItemFormAccessAdvisorWebModel';
}
