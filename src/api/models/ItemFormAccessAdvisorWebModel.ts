/* eslint-disable */

import type { ItemFormAllowedAction } from './ItemFormAllowedAction';
import type { ItemFormWebModel } from './ItemFormWebModel';

/**
 * Web model for an item form access advisor
 */
export type ItemFormAccessAdvisorWebModel = {
  /**
   * The retrieved item form
   */
  itemForm: ItemFormWebModel;
  /**
   * The winning permissions that users have on this item form (for all user groups they belong to)
   */
  winningPermission: ItemFormAllowedAction;
};

export namespace ItemFormAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormAccessAdvisorWebModel';
}
