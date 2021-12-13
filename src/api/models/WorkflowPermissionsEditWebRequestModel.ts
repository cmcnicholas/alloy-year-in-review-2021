/* eslint-disable */

import type { WorkflowPermissionWebModel } from './WorkflowPermissionWebModel';

/**
 * Web model for a design permissions get operation
 */
export type WorkflowPermissionsEditWebRequestModel = {
  /**
   * The permission to add to this
   */
  permissions: Array<WorkflowPermissionWebModel>;
  /**
   * The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   */
  signature: string;
};

export namespace WorkflowPermissionsEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowPermissionsEditWebRequestModel';
}
