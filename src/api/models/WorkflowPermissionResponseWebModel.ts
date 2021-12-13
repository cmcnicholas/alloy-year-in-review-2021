/* eslint-disable */

import type { WorkflowPermissionWebModel } from './WorkflowPermissionWebModel';

export type WorkflowPermissionResponseWebModel = WorkflowPermissionWebModel & {
  /**
   * The name of the user group with permissions on this workflow
   */
  userGroupName: string;
};

export namespace WorkflowPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowPermissionResponseWebModel';
}
