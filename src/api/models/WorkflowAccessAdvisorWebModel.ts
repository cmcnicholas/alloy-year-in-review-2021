/* eslint-disable */

import type { WorkflowAllowedAction } from './WorkflowAllowedAction';
import type { WorkflowWebModel } from './WorkflowWebModel';

/**
 * Web model for a workflow access advisor
 */
export type WorkflowAccessAdvisorWebModel = {
  /**
   * The retrieved workflow
   */
  workflow: WorkflowWebModel;
  /**
   * The winning permissions that users have on this workflow (for all user groups they belong to)
   */
  winningPermission: WorkflowAllowedAction;
};

export namespace WorkflowAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowAccessAdvisorWebModel';
}
