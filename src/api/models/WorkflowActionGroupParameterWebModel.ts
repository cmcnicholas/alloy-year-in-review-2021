/* eslint-disable */

import type { WorkflowActionGroupParameterTargetWebModel } from './WorkflowActionGroupParameterTargetWebModel';

/**
 * Web model for action group parameter
 */
export type WorkflowActionGroupParameterWebModel = {
  /**
   * The action group design parameter to be used
   */
  parameterCode: string;
  /**
   * The targets within the action group actions to apply the parameter to
   */
  targetParameters: Array<WorkflowActionGroupParameterTargetWebModel>;
};

export namespace WorkflowActionGroupParameterWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupParameterWebModel';
}
