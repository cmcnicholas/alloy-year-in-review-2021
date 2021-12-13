/* eslint-disable */

import type { DodiAccessAdvisorWebModel } from './DodiAccessAdvisorWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfDodiAccessAdvisorWebModel = {
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
  results: Array<DodiAccessAdvisorWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfDodiAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfDodiAccessAdvisorWebModel';
}
