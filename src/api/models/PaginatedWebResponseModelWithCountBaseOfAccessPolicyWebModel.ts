/* eslint-disable */

import type { PaginatedWebResponseModelBaseOfAccessPolicyWebModel } from './PaginatedWebResponseModelBaseOfAccessPolicyWebModel';

export type PaginatedWebResponseModelWithCountBaseOfAccessPolicyWebModel =
  PaginatedWebResponseModelBaseOfAccessPolicyWebModel & {
    /**
     * The total number of pages that can be returned for this data set
     */
    totalPages: number;
    /**
     * The total number of results
     */
    totalResults: number;
  };

export namespace PaginatedWebResponseModelWithCountBaseOfAccessPolicyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelWithCountBaseOfAccessPolicyWebModel';
}
