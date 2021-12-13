/* eslint-disable */

import type { WorkflowActionGroupParameterWebModel } from './WorkflowActionGroupParameterWebModel';

/**
 * Web request model for a workflow action group edit operation
 */
export type WorkflowActionGroupEditWebRequestModel = {
  /**
   * The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group
   */
  signature: string;
  /**
   * The item attributes belonging to this action
   */
  parameters?: Array<WorkflowActionGroupParameterWebModel> | null;
  /**
   * The dodi code that this action group will accept
   */
  inputDodiCode?: string | null;
  /**
   * The id of the action within the group that acts as the output
   */
  outputActionId?: string | null;
  /**
   * The name of the workflow action group
   */
  name: string;
  /**
   * Optional description to provide additional information about this workflow action group
   */
  description?: string | null;
};

export namespace WorkflowActionGroupEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupEditWebRequestModel';
}
