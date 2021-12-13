/* eslint-disable */

import type { MeshWithOperationsSummaryWebResponseModel } from './MeshWithOperationsSummaryWebResponseModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfMeshWithOperationsSummaryWebResponseModel = {
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
  results: Array<MeshWithOperationsSummaryWebResponseModel>;
};

export namespace PaginatedWebResponseModelBaseOfMeshWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelBaseOfMeshWithOperationsSummaryWebResponseModel';
}
