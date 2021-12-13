/* eslint-disable */

import type { WorkflowLogWebModel } from './WorkflowLogWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfWorkflowLogWebModel = {
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
  results: Array<WorkflowLogWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfWorkflowLogWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfWorkflowLogWebModel';
}
