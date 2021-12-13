/* eslint-disable */

import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';
import type { WorkflowActionVariableWebModel } from './WorkflowActionVariableWebModel';

/**
 * Web request model for a workflow action group edit action operation
 */
export type WorkflowActionGroupEditActionWebRequestModel = {
  /**
   * The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group
   */
  signature: string;
  /**
   * Optional description to provide additional information about this workflow action
   */
  description?: string | null;
  /**
   * The parameters belonging to this action
   */
  parameters?: Array<WorkflowActionParameterValueWebModelBase> | null;
  /**
   * The variables belonging to this action
   */
  variables?: Array<WorkflowActionVariableWebModel> | null;
};

export namespace WorkflowActionGroupEditActionWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupEditActionWebRequestModel';
}
