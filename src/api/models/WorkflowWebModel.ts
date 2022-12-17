/* eslint-disable */

import type { Context } from './Context';
import type { MetadataWebModel } from './MetadataWebModel';
import type { WorkflowFailureNotificationWebModel } from './WorkflowFailureNotificationWebModel';
import type { WorkflowNodeInfoWebModel } from './WorkflowNodeInfoWebModel';
import type { WorkflowTimeConditionWebModel } from './WorkflowTimeConditionWebModel';
import type { WorkflowTriggerWebModelBase } from './WorkflowTriggerWebModelBase';

/**
 * Web model for a Workflow
 */
export type WorkflowWebModel = {
  /**
   * The name of the workflow
   */
  name: string;
  /**
   * Optional description that provides additional information about this workflow
   */
  description?: string | null;
  /**
   * The workflow Context
   */
  context: Context;
  /**
   * The tags associated to this workflow
   */
  tags?: Array<string> | null;
  /**
   * If set to true, the workflow will run when conditions match the trigger.
   * Otherwise, it will be disabled.
   */
  enabled: boolean;
  /**
   * Optional precondition that places additional conditions on the triggering of the workflow.
   */
  preCondition?: WorkflowTimeConditionWebModel | null;
  /**
   * The trigger for the workflow, see implementations for options.
   */
  trigger: WorkflowTriggerWebModelBase;
  /**
   * Information about this workflow node
   */
  triggerNodeInfo: WorkflowNodeInfoWebModel;
  /**
   * Failure notification information for the workflow, see implementations for options.
   */
  failureNotification?: WorkflowFailureNotificationWebModel | null;
  /**
   * The optional logs retention (in days) the logs for this workflow need to be kept for. If not specified, the logs
   * will be kept indefinitely
   */
  logsRetentionDays?: number | null;
  /**
   * The code of the workflow
   */
  code: string;
  /**
   * The metadata to a workflow
   */
  metadata: MetadataWebModel;
};

export namespace WorkflowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowWebModel';
}
