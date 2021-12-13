/* eslint-disable */

/**
 * Web model for action group parameter target
 */
export type WorkflowActionGroupParameterTargetWebModel = {
  /**
   * An action id corresponding to an action within the action group to target
   */
  actionId: string;
  /**
   * A parameter of the corresponding action to target
   */
  parameterCode: string;
};

export namespace WorkflowActionGroupParameterTargetWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupParameterTargetWebModel';
}
