/* eslint-disable */

import type { DodiAttributePermissionResponseWebModel } from './DodiAttributePermissionResponseWebModel';

/**
 * Web model for a dodi attribute permissions get operation
 */
export type DodiAttributePermissionsGetWebResponseModel = {
  /**
   * The code of the dodi attribute these permissions belong to
   */
  attributeCode: string;
  /**
   * The user groups associated to this dodi attribute
   */
  permissions: Array<DodiAttributePermissionResponseWebModel>;
};

export namespace DodiAttributePermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributePermissionsGetWebResponseModel';
}
