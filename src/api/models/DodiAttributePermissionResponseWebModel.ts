/* eslint-disable */

import type { DodiAttributePermissionWebModel } from './DodiAttributePermissionWebModel';

export type DodiAttributePermissionResponseWebModel = DodiAttributePermissionWebModel & {
  /**
   * The name of the user group
   */
  userGroupName: string;
};

export namespace DodiAttributePermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributePermissionResponseWebModel';
}
