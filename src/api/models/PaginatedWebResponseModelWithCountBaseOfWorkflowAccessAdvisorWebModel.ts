/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfWorkflowAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfWorkflowAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfWorkflowAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfWorkflowAccessAdvisorWebModel';
}
