/* eslint-disable */

import type { LayerPermissionWebModel } from './LayerPermissionWebModel';

/**
 * Web model for a design permissions get operation
 */
export type LayerPermissionsEditWebRequestModel = {
  /**
   * The permission to add to this
   */
  permissions: Array<LayerPermissionWebModel>;
  /**
   * The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   */
  signature: string;
};

export namespace LayerPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerPermissionsEditWebRequestModel';
}
