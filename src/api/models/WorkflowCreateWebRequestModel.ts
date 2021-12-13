/* eslint-disable */

import type { WorkflowFailureNotificationInfoWebModel } from './WorkflowFailureNotificationInfoWebModel';
import type { WorkflowTimeConditionWebModel } from './WorkflowTimeConditionWebModel';
import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

/**
 * Web request model for a Workflow create operation
 */
export type WorkflowCreateWebRequestModel = {
  /**
   * The name of the workflow
   */
  name: string;
  /**
   * If set to true, the workflow will run when conditions match the trigger.
   * Otherwise, it will be disabled.
   */
  enabled: boolean;
  /**
   * Optional description to provide additional information about this workflow
   */
  description?: string | null;
  /**
   * Optional precondition that places additional conditions on the triggering of the workflow.
   */
  preCondition?: WorkflowTimeConditionWebModel | null;
  /**
   * The trigger for the workflow, see implementations for options.
   */
  trigger: WorkflowTriggerWebModelBase;
  /**
   * Failure notification information for the workflow, see implementations for options.
   */
  failureNotification?: WorkflowFailureNotificationInfoWebModel | null;
  /**
   * The optional logs retention (in days) the logs for this workflow need to be kept for. If not specified, the logs
   * will be kept indefinitely
   */
  logsRetentionDays?: number | null;
};

export namespace WorkflowCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowCreateWebRequestModel';
}
