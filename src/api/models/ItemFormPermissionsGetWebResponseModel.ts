/* eslint-disable */

import type { ItemFormPermissionResponseWebModel } from './ItemFormPermissionResponseWebModel';

/**
 * Web model for an item form permissions get operation
 */
export type ItemFormPermissionsGetWebResponseModel = {
  /**
   * The permissions associated to this item form
   */
  permissions: Array<ItemFormPermissionResponseWebModel>;
};

export namespace ItemFormPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormPermissionsGetWebResponseModel';
}
