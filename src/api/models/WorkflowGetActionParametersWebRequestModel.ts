/* eslint-disable */

import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';
import type { WorkflowActionVariableWebModel } from './WorkflowActionVariableWebModel';

/**
 * Web request model for a Workflow add action operation
 */
export type WorkflowGetActionParametersWebRequestModel = {
  /**
   * The design code of the action type being queried
   */
  actionDesignCode: string;
  /**
   * The node this action type would be connected to
   */
  ancestorId: string;
  /**
   * Parameters marked with the WorkflowDynamicParameter tag. These will affect
   * the dynamic parameter requirements returned.
   */
  parameters?: Array<WorkflowActionParameterValueWebModelBase> | null;
  /**
   * The variables belonging to this action
   */
  variables?: Array<WorkflowActionVariableWebModel> | null;
};

export namespace WorkflowGetActionParametersWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowGetActionParametersWebRequestModel';
}
