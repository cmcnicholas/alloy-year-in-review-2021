/* eslint-disable */

import type { DesignWebModel } from './DesignWebModel';
import type { DodiAttributePermissionsGetWebResponseModel } from './DodiAttributePermissionsGetWebResponseModel';
import type { DodiAttributePermissionWebModel } from './DodiAttributePermissionWebModel';
import type { DodiOperationsSummaryWebModel } from './DodiOperationsSummaryWebModel';
import type { DodiPermissionResponseWebModel } from './DodiPermissionResponseWebModel';

/**
 * Web model for a design
 */
export type DesignWithPermissionsWebResponseModel = {
  /**
   * The design returned as a result
   */
  design: DesignWebModel;
  /**
   * The summary of the UAC operations allowed for this design
   */
  operationsSummary: DodiOperationsSummaryWebModel;
  /**
   * The array containing the dodi permissions
   */
  dodiPermissions: Array<DodiPermissionResponseWebModel>;
  /**
   * The array containing the permissions on the attributes belonging to this dodi
   */
  attributesPermissions: Array<DodiAttributePermissionsGetWebResponseModel>;
  /**
   * The default permissions for dodi attributes.
   */
  defaultAttributePermissions: Array<DodiAttributePermissionWebModel>;
};

export namespace DesignWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignWithPermissionsWebResponseModel';
}
