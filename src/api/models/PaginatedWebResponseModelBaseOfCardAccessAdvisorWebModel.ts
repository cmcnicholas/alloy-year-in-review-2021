/* eslint-disable */

import type { CardAccessAdvisorWebModel } from './CardAccessAdvisorWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfCardAccessAdvisorWebModel = {
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
  results: Array<CardAccessAdvisorWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfCardAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfCardAccessAdvisorWebModel';
}
