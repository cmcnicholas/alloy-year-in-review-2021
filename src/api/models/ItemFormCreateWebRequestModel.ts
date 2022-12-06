/* eslint-disable */

import type { ItemFormAction } from './ItemFormAction';
import type { ItemFormControlWebModel } from './ItemFormControlWebModel';
import type { ItemFormExpressionWebModel } from './ItemFormExpressionWebModel';

/**
 * Web request model to create an item form
 */
export type ItemFormCreateWebRequestModel = {
  /**
   * The name of the item form
   */
  name: string;
  /**
   * Dodi code this item form applies to
   */
  dodiCode: string;
  /**
   * The item form controls to have on the item form upon creation
   */
  controls?: Array<ItemFormControlWebModel> | null;
  /**
   * The item form tags
   */
  tags?: Array<string> | null;
  /**
   * The item form actions
   */
  actions?: Array<ItemFormAction> | null;
  /**
   * The item form expressions to have on the item form upon creation
   */
  expressions?: Array<ItemFormExpressionWebModel> | null;
};

export namespace ItemFormCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormCreateWebRequestModel';
}
