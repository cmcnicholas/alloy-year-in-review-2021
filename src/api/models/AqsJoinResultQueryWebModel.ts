/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { ItemWebModel } from './ItemWebModel';

/**
 * Web model of an aqs join result query
 */
export type AqsJoinResultQueryWebModel = {
  /**
   * All the join attributes provided in the request that are fulfilled by this query
   */
  joinAttributes: Array<string>;
  /**
   * The query the service ran to satisfy the join attribute request
   */
  aqsQuery: AqsJsonNode;
  /**
   * If the result of the query is exactly one item match this property will contain the item,
   * otherwise it is expected to be null
   */
  item?: ItemWebModel | null;
  /**
   * The total items matched by this query
   */
  totalItems: number;
};

export namespace AqsJoinResultQueryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsJoinResultQueryWebModel';
}
