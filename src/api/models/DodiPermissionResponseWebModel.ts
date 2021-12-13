/* eslint-disable */

import type { DodiPermissionWebModel } from './DodiPermissionWebModel';

export type DodiPermissionResponseWebModel = DodiPermissionWebModel & {
  /**
   * The name of the user group
   */
  userGroupName: string;
  /**
   * The Guc of the parent these permissions come from
   */
  parent: string;
};

export namespace DodiPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiPermissionResponseWebModel';
}
