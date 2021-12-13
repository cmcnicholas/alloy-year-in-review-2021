/* eslint-disable */

import type { LayerAllowedAction } from './LayerAllowedAction';

/**
 * Web model for a layer permission
 */
export type LayerPermissionWebModel = {
  /**
   * The Guc of the user group that owns the permissions stored in the Allows property
   */
  userGroupCode: string;
  /**
   * The action that this user group can perform on this layer
   */
  allows: LayerAllowedAction;
};

export namespace LayerPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerPermissionWebModel';
}
