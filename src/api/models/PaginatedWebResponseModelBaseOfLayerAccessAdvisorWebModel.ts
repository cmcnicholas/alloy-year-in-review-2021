/* eslint-disable */

import type { LayerAccessAdvisorWebModel } from './LayerAccessAdvisorWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfLayerAccessAdvisorWebModel = {
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
  results: Array<LayerAccessAdvisorWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfLayerAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfLayerAccessAdvisorWebModel';
}
