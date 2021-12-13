/* eslint-disable */

import type { DodiAllowedOperation } from './DodiAllowedOperation';

/**
 * Web model for a design permission
 */
export type DodiPermissionWebModel = {
  /**
   * The Guc of the user group
   */
  userGroupCode: string;
  /**
   * The list of allowed operations for this user group
   */
  allows: Array<DodiAllowedOperation>;
};

export namespace DodiPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiPermissionWebModel';
}
