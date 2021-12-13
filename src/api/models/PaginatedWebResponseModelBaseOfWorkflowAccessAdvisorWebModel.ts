/* eslint-disable */

import type { WorkflowAccessAdvisorWebModel } from './WorkflowAccessAdvisorWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfWorkflowAccessAdvisorWebModel = {
  /**
   * The page number where data was loaded (1 based)
   */
  page: number;
  /**
   * The number of results being returned per page
   */
  pageSize: number;
  /**
   * The results for the request
   */
  results: Array<WorkflowAccessAdvisorWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfWorkflowAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfWorkflowAccessAdvisorWebModel';
}
