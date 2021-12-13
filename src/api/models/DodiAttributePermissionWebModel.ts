/* eslint-disable */

import type { DodiAttributeAllowedAction } from './DodiAttributeAllowedAction';

/**
 * Web model for a dodi attribute permission. It contains the information about whether an
 * attribute cannot be accessed, is read only, or is readable and writable by the group
 */
export type DodiAttributePermissionWebModel = {
  /**
   * The Guc of the alloy user group
   */
  userGroupCode: string;
  /**
   * The Guc of the dodi or attribute this permission is declared on
   */
  parent: string;
  /**
   * The operation allowed for this attribute
   */
  allows: DodiAttributeAllowedAction;
};

export namespace DodiAttributePermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributePermissionWebModel';
}
