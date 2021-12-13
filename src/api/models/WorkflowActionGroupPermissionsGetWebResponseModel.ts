/* eslint-disable */

import type { WorkflowActionGroupPermissionResponseWebModel } from './WorkflowActionGroupPermissionResponseWebModel';

/**
 * Web model for a Workflow action group permissions get operation
 */
export type WorkflowActionGroupPermissionsGetWebResponseModel = {
  /**
   * The user groups associated to this workflow action group
   */
  permissions: Array<WorkflowActionGroupPermissionResponseWebModel>;
};

export namespace WorkflowActionGroupPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupPermissionsGetWebResponseModel';
}
