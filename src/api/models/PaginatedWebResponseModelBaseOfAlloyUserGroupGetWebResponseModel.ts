/* eslint-disable */

import type { AlloyUserGroupGetWebResponseModel } from './AlloyUserGroupGetWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfAlloyUserGroupGetWebResponseModel = {
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
  results: Array<AlloyUserGroupGetWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfAlloyUserGroupGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfAlloyUserGroupGetWebResponseModel';
}
