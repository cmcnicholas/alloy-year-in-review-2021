/* eslint-disable */

import type { CardWithOperationsSummaryWebResponseModel } from './CardWithOperationsSummaryWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfCardWithOperationsSummaryWebResponseModel = {
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
  results: Array<CardWithOperationsSummaryWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfCardWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelBaseOfCardWithOperationsSummaryWebResponseModel';
}
