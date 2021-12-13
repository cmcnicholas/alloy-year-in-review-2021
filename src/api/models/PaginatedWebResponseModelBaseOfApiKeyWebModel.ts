/* eslint-disable */

import type { ApiKeyWebModel } from './ApiKeyWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfApiKeyWebModel = {
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
  results: Array<ApiKeyWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfApiKeyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfApiKeyWebModel';
}
