/* eslint-disable */

import type { ItemFormAction } from './ItemFormAction';
import type { ItemFormControlUpsertWebRequestModel } from './ItemFormControlUpsertWebRequestModel';

/**
 * The web request model used to edit an item form
 */
export type ItemFormEditWebRequestModel = {
  /**
   * The card name
   */
  name: string;
  /**
   * The item form controls that will replace any previous controls on this item card
   */
  controls: Array<ItemFormControlUpsertWebRequestModel>;
  /**
   * The item form tags that will replace or, when null, remove any previous tags
   */
  tags?: Array<string> | null;
  /**
   * The item form actions that will replace or, when null remove any previous actions
   */
  actions?: Array<ItemFormAction> | null;
  /**
   * The signature is used to ensure that the card being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same card
   */
  signature: string;
};

export namespace ItemFormEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormEditWebRequestModel';
}
