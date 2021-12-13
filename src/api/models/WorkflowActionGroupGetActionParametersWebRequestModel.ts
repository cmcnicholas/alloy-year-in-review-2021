/* eslint-disable */

import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';
import type { WorkflowActionVariableWebModel } from './WorkflowActionVariableWebModel';

/**
 * Web request model for a workflow action group add action operation
 */
export type WorkflowActionGroupGetActionParametersWebRequestModel = {
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
   * The variables belonging to this action group
   */
  variables?: Array<WorkflowActionVariableWebModel> | null;
};

export namespace WorkflowActionGroupGetActionParametersWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupGetActionParametersWebRequestModel';
}
