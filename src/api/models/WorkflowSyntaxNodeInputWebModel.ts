/* eslint-disable */

import type { WorkflowSyntaxArgumentItemValueBaseWebModel } from './WorkflowSyntaxArgumentItemValueBaseWebModel';
import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

export type WorkflowSyntaxNodeInputWebModel = WorkflowSyntaxNodeBaseWebModel & {
  /**
   * The ancestor action to take the input from.
   */
  inputParent?: number;
  /**
   * The item value to select from the specified input
   */
  itemValue: WorkflowSyntaxArgumentItemValueBaseWebModel;
};

export namespace WorkflowSyntaxNodeInputWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeInputWebModel';
}
