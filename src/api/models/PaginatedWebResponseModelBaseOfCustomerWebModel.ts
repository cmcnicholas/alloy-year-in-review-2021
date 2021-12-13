/* eslint-disable */

import type { CustomerWebModel } from './CustomerWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfCustomerWebModel = {
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
  results: Array<CustomerWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfCustomerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfCustomerWebModel';
}
