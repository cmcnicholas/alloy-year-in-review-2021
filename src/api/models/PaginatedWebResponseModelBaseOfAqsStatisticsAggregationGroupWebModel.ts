/* eslint-disable */

import type { AqsStatisticsAggregationGroupWebModel } from './AqsStatisticsAggregationGroupWebModel';

/**
 * The base model for all paginated responses
 */
export type PaginatedWebResponseModelBaseOfAqsStatisticsAggregationGroupWebModel = {
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
  results: Array<AqsStatisticsAggregationGroupWebModel>;
};

export namespace PaginatedWebResponseModelBaseOfAqsStatisticsAggregationGroupWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'PaginatedWebResponseModelBaseOfAqsStatisticsAggregationGroupWebModel';
}
