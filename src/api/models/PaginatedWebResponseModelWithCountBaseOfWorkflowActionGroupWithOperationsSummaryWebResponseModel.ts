/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfWorkflowActionGroupWithOperationsSummaryWebResponseModel';
}
