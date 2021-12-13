/* eslint-disable */

import type { AlloyRoleGetWebResponseModel } from './AlloyRoleGetWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfAlloyRoleGetWebResponseModel = {
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
  results: Array<AlloyRoleGetWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfAlloyRoleGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfAlloyRoleGetWebResponseModel';
}
