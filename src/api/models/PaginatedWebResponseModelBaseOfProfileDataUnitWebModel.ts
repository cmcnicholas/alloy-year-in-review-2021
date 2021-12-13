/* eslint-disable */

import type { ProfileDataUnitWebModel } from './ProfileDataUnitWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfProfileDataUnitWebModel = {
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
  results: Array<ProfileDataUnitWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfProfileDataUnitWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfProfileDataUnitWebModel';
}
