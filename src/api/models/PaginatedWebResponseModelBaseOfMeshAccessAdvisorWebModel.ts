/* eslint-disable */

import type { MeshAccessAdvisorWebModel } from './MeshAccessAdvisorWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfMeshAccessAdvisorWebModel = {
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
  results: Array<MeshAccessAdvisorWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfMeshAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PaginatedWebResponseModelBaseOfMeshAccessAdvisorWebModel';
}
