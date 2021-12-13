/* eslint-disable */

import type { ItemAttributeWebModel } from './ItemAttributeWebModel';
import type { JToken } from './JToken';

/**
 * Response model of an aqs math aggregation operation
 */
export type AqsStatisticsAggregationGroupWebModel = {
  /**
   * The group key
   */
  key?: JToken | null;
  /**
   * The aggregation value for the correspondent group
   */
  value: ItemAttributeWebModel;
};

export namespace AqsStatisticsAggregationGroupWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsStatisticsAggregationGroupWebModel';
}
