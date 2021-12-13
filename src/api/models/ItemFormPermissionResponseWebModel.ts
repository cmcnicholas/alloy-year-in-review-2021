/* eslint-disable */

import type { ItemFormPermissionWebModel } from './ItemFormPermissionWebModel';

export type ItemFormPermissionResponseWebModel = ItemFormPermissionWebModel & {
  /**
   * Name of the user group with permissions on this item form
   */
  userGroupName: string;
};

export namespace ItemFormPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormPermissionResponseWebModel';
}
