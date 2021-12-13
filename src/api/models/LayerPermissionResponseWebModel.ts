/* eslint-disable */

import type { LayerPermissionWebModel } from './LayerPermissionWebModel';

export type LayerPermissionResponseWebModel = LayerPermissionWebModel & {
  /**
   * Name of the user group with permissions on this layer
   */
  userGroupName: string;
};

export namespace LayerPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerPermissionResponseWebModel';
}
