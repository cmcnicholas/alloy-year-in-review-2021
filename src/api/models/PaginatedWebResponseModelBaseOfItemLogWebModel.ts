/* eslint-disable */

import type { ItemLogWebModel } from './ItemLogWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfItemLogWebModel = {
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
  results: Array<ItemLogWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfItemLogWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfItemLogWebModel';
}
