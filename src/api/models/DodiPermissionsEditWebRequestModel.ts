/* eslint-disable */

import type { DodiAttributePermissionWebModel } from './DodiAttributePermissionWebModel';
import type { DodiAttributesPermissionEditWebModel } from './DodiAttributesPermissionEditWebModel';
import type { DodiPermissionWebModel } from './DodiPermissionWebModel';

/**
 * Web model for a dodi permissions edit operation
 */
export type DodiPermissionsEditWebRequestModel = {
  /**
   * The permission to set for this dodi
   */
  dodiPermissions: Array<DodiPermissionWebModel>;
  /**
   * The permission to set for dodi attributes. Absence of the attribute means that all permissions will be removed.
   */
  attributesPermissions: Array<DodiAttributesPermissionEditWebModel>;
  /**
   * The default permission to set for dodi attributes. Absence of the attribute means that all permissions will be removed.
   */
  defaultAttributePermissions?: Array<DodiAttributePermissionWebModel> | null;
  /**
   * The signature is used to ensure that the dodi being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same dodi
   */
  signature: string;
};

export namespace DodiPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiPermissionsEditWebRequestModel';
}
