/* eslint-disable */

import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from './WorkflowActionGroupWithOperationsSummaryWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel =
  {
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
    results: Array<WorkflowActionGroupWithOperationsSummaryWebResponseModel>;
  };

export namespace PaginatedWebResponseModelBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel';
}
