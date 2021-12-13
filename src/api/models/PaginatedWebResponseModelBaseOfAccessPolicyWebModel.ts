/* eslint-disable */

import type { AccessPolicyWebModel } from './AccessPolicyWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfAccessPolicyWebModel = {
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
  results: Array<AccessPolicyWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfAccessPolicyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfAccessPolicyWebModel';
}
