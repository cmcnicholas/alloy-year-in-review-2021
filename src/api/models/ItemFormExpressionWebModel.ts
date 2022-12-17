/* eslint-disable */

import type { ItemFormExpressionNodeWebModel } from './ItemFormExpressionNodeWebModel';

/**
 * Item form expression web model
 */
export type ItemFormExpressionWebModel = {
  /**
   * The identifier of the expression within the item form
   */
  id: string;
  /**
   * The user defined name of the expression
   */
  name: string;
  /**
   * The array of nodes defining the expression
   */
  nodes: Array<ItemFormExpressionNodeWebModel>;
};

export namespace ItemFormExpressionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormExpressionWebModel';
}
