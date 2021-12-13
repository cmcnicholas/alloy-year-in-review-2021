/* eslint-disable */

import type { WorkflowAllowedAction } from './WorkflowAllowedAction';

/**
 * Web model for a workflow permission
 */
export type WorkflowPermissionWebModel = {
  /**
   * The Guc of the user group with permissions on this workflow
   */
  userGroupCode: string;
  /**
   * The permissions that this group has on this workflow
   */
  allows: WorkflowAllowedAction;
};

export namespace WorkflowPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowPermissionWebModel';
}
