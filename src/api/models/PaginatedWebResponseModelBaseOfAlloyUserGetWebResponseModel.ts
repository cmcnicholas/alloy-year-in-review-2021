/* eslint-disable */

import type { AlloyUserGetWebResponseModel } from './AlloyUserGetWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfAlloyUserGetWebResponseModel = {
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
  results: Array<AlloyUserGetWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfAlloyUserGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfAlloyUserGetWebResponseModel';
}
