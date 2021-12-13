/* eslint-disable */

import type { ItemFormWithOperationsSummaryWebResponseModel } from './ItemFormWithOperationsSummaryWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfItemFormWithOperationsSummaryWebResponseModel = {
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
  results: Array<ItemFormWithOperationsSummaryWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfItemFormWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelBaseOfItemFormWithOperationsSummaryWebResponseModel';
}
