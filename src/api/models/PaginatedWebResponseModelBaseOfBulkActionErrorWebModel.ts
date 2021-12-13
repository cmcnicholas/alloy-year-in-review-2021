/* eslint-disable */

import type { BulkActionErrorWebModel } from './BulkActionErrorWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfBulkActionErrorWebModel = {
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
  results: Array<BulkActionErrorWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfBulkActionErrorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfBulkActionErrorWebModel';
}
