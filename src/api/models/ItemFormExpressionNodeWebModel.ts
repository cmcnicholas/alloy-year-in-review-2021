/* eslint-disable */

import type { JObject } from './JObject';

/**
 * Item form expression node web model
 */
export type ItemFormExpressionNodeWebModel = {
  /**
   * The identifier of the node within the expression
   */
  id: string;
  /**
   * The node type as supported by a client
   */
  type: string;
  /**
   * The properties for the node
   */
  properties: JObject;
};

export namespace ItemFormExpressionNodeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormExpressionNodeWebModel';
}
