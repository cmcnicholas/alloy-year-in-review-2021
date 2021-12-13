/* eslint-disable */

import type { WorkflowActionGroupAllowedAction } from './WorkflowActionGroupAllowedAction';
import type { WorkflowActionGroupWebModel } from './WorkflowActionGroupWebModel';

/**
 * Web model for a workflow action group access advisor
 */
export type WorkflowActionGroupAccessAdvisorWebModel = {
  /**
   * The retrieved workflow action group
   */
  workflowActionGroup: WorkflowActionGroupWebModel;
  /**
   * The winning permissions that users have on this workflow action group (for all user groups they belong to)
   */
  winningPermission: WorkflowActionGroupAllowedAction;
};

export namespace WorkflowActionGroupAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupAccessAdvisorWebModel';
}
