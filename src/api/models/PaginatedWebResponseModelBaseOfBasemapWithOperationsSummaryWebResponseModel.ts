/* eslint-disable */

import type { BasemapWithOperationsSummaryWebResponseModel } from './BasemapWithOperationsSummaryWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfBasemapWithOperationsSummaryWebResponseModel = {
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
  results: Array<BasemapWithOperationsSummaryWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfBasemapWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelBaseOfBasemapWithOperationsSummaryWebResponseModel';
}
