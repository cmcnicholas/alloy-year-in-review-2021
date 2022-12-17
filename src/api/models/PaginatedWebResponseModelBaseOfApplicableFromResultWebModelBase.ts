/* eslint-disable */

import type { ApplicableFromResultWebModelBase } from './ApplicableFromResultWebModelBase';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfApplicableFromResultWebModelBase = {
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
  results: Array<ApplicableFromResultWebModelBase>;
};

export namespace PaginatedWebResponseModelBaseOfApplicableFromResultWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfApplicableFromResultWebModelBase';
}
