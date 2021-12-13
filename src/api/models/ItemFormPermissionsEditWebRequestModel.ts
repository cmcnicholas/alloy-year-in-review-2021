/* eslint-disable */

import type { ItemFormPermissionWebModel } from './ItemFormPermissionWebModel';

/**
 * Web model for an item form permissions get operation
 */
export type ItemFormPermissionsEditWebRequestModel = {
  /**
   * The permissions to add to this item form
   */
  permissions: Array<ItemFormPermissionWebModel>;
  /**
   * The signature is used to ensure that the item form being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same item form
   */
  signature: string;
};

export namespace ItemFormPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormPermissionsEditWebRequestModel';
}
