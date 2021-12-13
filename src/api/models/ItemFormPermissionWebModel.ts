/* eslint-disable */

import type { ItemFormAllowedAction } from './ItemFormAllowedAction';

/**
 * Web model for an item form permission
 */
export type ItemFormPermissionWebModel = {
  /**
   * The Guc of the user group with permissions on this item form
   */
  userGroupCode: string;
  /**
   * The permissions that this group has on this item form
   */
  allows: ItemFormAllowedAction;
};

export namespace ItemFormPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormPermissionWebModel';
}
