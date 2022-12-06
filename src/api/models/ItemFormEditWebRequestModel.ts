/* eslint-disable */

import type { ItemFormAction } from './ItemFormAction';
import type { ItemFormControlWebModel } from './ItemFormControlWebModel';
import type { ItemFormExpressionWebModel } from './ItemFormExpressionWebModel';

/**
 * The web request model used to edit an item form
 */
export type ItemFormEditWebRequestModel = {
  /**
   * The item form name
   */
  name: string;
  /**
   * The item form controls that will replace any previous controls on this item form
   */
  controls: Array<ItemFormControlWebModel>;
  /**
   * The item form tags that will replace or, when null, remove any previous tags
   */
  tags?: Array<string> | null;
  /**
   * The item form actions that will replace or, when null remove any previous actions
   */
  actions?: Array<ItemFormAction> | null;
  /**
   * The item form expressions that will replace any previous expressions on this item form
   */
  expressions?: Array<ItemFormExpressionWebModel> | null;
  /**
   * The signature is used to ensure that the item form being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same item form
   */
  signature: string;
};

export namespace ItemFormEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormEditWebRequestModel';
}
