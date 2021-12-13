/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfWorkflowActionGroupAccessAdvisorWebModel } from './PaginatedWebResponseModelBaseOfWorkflowActionGroupAccessAdvisorWebModel';

export type PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel =
  PaginatedWebResponseModelBaseOfWorkflowActionGroupAccessAdvisorWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupAccessAdvisorWebModel';
}
