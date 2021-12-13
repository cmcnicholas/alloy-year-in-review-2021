/* eslint-disable */

import type { BasemapPermissionWebModel } from './BasemapPermissionWebModel';

/**
 * Web model for a basemap permissions get operation
 */
export type BasemapPermissionsEditWebRequestModel = {
  /**
   * The permission to add to this
   */
  permissions: Array<BasemapPermissionWebModel>;
  /**
   * The signature is used to ensure that the object being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same basemap
   */
  signature: string;
};

export namespace BasemapPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapPermissionsEditWebRequestModel';
}
