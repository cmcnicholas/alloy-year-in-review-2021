/* eslint-disable */

import type { CardPermissionWebModel } from './CardPermissionWebModel';

/**
 * Web model for a card permissions get operation
 */
export type CardPermissionsEditWebRequestModel = {
  /**
   * The permission to add to this card
   */
  permissions: Array<CardPermissionWebModel>;
  /**
   * The signature is used to ensure that the card being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same card
   */
  signature: string;
};

export namespace CardPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardPermissionsEditWebRequestModel';
}
