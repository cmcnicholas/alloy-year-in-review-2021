/* eslint-disable */

import type { WorkflowPermissionResponseWebModel } from './WorkflowPermissionResponseWebModel';

/**
 * Web model for a workflow permissions get operation
 */
export type WorkflowPermissionsGetWebResponseModel = {
  /**
   * The user groups associated to this workflow
   */
  permissions: Array<WorkflowPermissionResponseWebModel>;
};

export namespace WorkflowPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowPermissionsGetWebResponseModel';
}
