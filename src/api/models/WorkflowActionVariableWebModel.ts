/* eslint-disable */

import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

/**
 * A variable defined on a workflow action
 */
export type WorkflowActionVariableWebModel = {
  /**
   * The attribute to apply the virtual definition to
   */
  name: string;
  /**
   * The virtual definition
   */
  value: WorkflowSyntaxNodeBaseWebModel;
};

export namespace WorkflowActionVariableWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionVariableWebModel';
}
