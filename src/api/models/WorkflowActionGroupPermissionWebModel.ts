/* eslint-disable */

import type { WorkflowActionGroupAllowedAction } from './WorkflowActionGroupAllowedAction';

/**
 * Web model for a workflow action group permission
 */
export type WorkflowActionGroupPermissionWebModel = {
  /**
   * The Guc of the user group with permissions on this workflow action group
   */
  userGroupCode: string;
  /**
   * The permissions that this group has on this workflow action group
   */
  allows: WorkflowActionGroupAllowedAction;
};

export namespace WorkflowActionGroupPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupPermissionWebModel';
}
