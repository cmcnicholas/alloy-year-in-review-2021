/* eslint-disable */

import type { DodiAttributePermissionWebModel } from './DodiAttributePermissionWebModel';

/**
 * Web model for a dodi attributes permissions edit operation
 */
export type DodiAttributesPermissionEditWebModel = {
  /**
   * The Guc of the dodi attribute to edit permissions of
   */
  attributeCode: string;
  /**
   * The permission to set for this attribute
   */
  permissions: Array<DodiAttributePermissionWebModel>;
};

export namespace DodiAttributesPermissionEditWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributesPermissionEditWebModel';
}
