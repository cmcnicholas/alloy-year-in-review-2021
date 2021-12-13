/* eslint-disable */

import type { DesignWebModel } from './DesignWebModel';
import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';
import type { WorkflowActionVariableWebModel } from './WorkflowActionVariableWebModel';

/**
 * Model representing a tree of workflow actions.
 * The output of this action will be the input to the actions in Actions.
 */
export type WorkflowActionWebModel = {
  /**
   * The design for the action
   */
  actionDesign: DesignWebModel;
  /**
   * The action id
   */
  actionId: string;
  /**
   * Optional description that provides additional information about this workflow action
   */
  description?: string | null;
  /**
   * The actions that will follow this action.
   */
  actions?: Array<WorkflowActionWebModel> | null;
  /**
   * The parameters that the workflow will run this action with
   */
  parameters?: Array<WorkflowActionParameterValueWebModelBase> | null;
  /**
   * The variables accessible by parameters on this action
   */
  variables?: Array<WorkflowActionVariableWebModel> | null;
};

export namespace WorkflowActionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionWebModel';
}
