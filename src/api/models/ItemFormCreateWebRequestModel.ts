/* eslint-disable */

import type { ItemFormAction } from './ItemFormAction';
import type { ItemFormControlUpsertWebRequestModel } from './ItemFormControlUpsertWebRequestModel';

/**
 * Web request model to create an item form
 */
export type ItemFormCreateWebRequestModel = {
  /**
   * The name of the import form
   */
  name: string;
  /**
   * Dodi code this item form applies to
   */
  dodiCode: string;
  /**
   * The item form controls to have on the item form upon creation
   */
  controls?: Array<ItemFormControlUpsertWebRequestModel> | null;
  /**
   * The item form tags
   */
  tags?: Array<string> | null;
  /**
   * The item form actions
   */
  actions?: Array<ItemFormAction> | null;
};

export namespace ItemFormCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormCreateWebRequestModel';
}
