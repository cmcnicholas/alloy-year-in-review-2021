/* eslint-disable */

import type { ApplicableToDodiWebResponseModel } from './ApplicableToDodiWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfApplicableToDodiWebResponseModel = {
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
  results: Array<ApplicableToDodiWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfApplicableToDodiWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfApplicableToDodiWebResponseModel';
}
