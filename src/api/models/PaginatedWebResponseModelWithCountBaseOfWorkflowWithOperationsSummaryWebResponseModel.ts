/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfWorkflowWithOperationsSummaryWebResponseModel } from './PaginatedWebResponseModelBaseOfWorkflowWithOperationsSummaryWebResponseModel';

export type PaginatedWebResponseModelWithCountBaseOfWorkflowWithOperationsSummaryWebResponseModel =
  PaginatedWebResponseModelBaseOfWorkflowWithOperationsSummaryWebResponseModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfWorkflowWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelWithCountBaseOfWorkflowWithOperationsSummaryWebResponseModel';
}
