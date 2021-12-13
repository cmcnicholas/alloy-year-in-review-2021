/* eslint-disable */

import type { WorkflowActionGroupPermissionWebModel } from './WorkflowActionGroupPermissionWebModel';

export type WorkflowActionGroupPermissionResponseWebModel =
  WorkflowActionGroupPermissionWebModel & {
    /**
     * The name of the user group with permissions on this workflow action group
     */
    userGroupName: string;
  };

export namespace WorkflowActionGroupPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupPermissionResponseWebModel';
}
