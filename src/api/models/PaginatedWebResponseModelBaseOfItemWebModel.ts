/* eslint-disable */

import type { ItemWebModel } from './ItemWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfItemWebModel = {
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
  results: Array<ItemWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfItemWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfItemWebModel';
}
