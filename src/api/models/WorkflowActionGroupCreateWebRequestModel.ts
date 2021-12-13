/* eslint-disable */

import type { WorkflowActionGroupParameterWebModel } from './WorkflowActionGroupParameterWebModel';

/**
 * Web request model for a workflow action group create operation
 */
export type WorkflowActionGroupCreateWebRequestModel = {
  /**
   * Parameter mappings to internal actions
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
   * The Guc of the corresponding design of the workflow action group
   */
  designCode: string;
  /**
   * The name of the workflow action group
   */
  name: string;
  /**
   * Optional description to provide additional information about this workflow action group
   */
  description?: string | null;
};

export namespace WorkflowActionGroupCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupCreateWebRequestModel';
}
