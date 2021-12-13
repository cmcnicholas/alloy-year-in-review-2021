/* eslint-disable */

import type { WorkflowSyntaxArgumentItemValueBaseWebModel } from './WorkflowSyntaxArgumentItemValueBaseWebModel';
import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

export type WorkflowSyntaxNodeOutputWebModel = WorkflowSyntaxNodeBaseWebModel & {
  /**
   * The Alloy Id of the action to evaluate this node on
   */
  outputAction: string;
  /**
   * The item value to select from the specified action output
   */
  itemValue: WorkflowSyntaxArgumentItemValueBaseWebModel;
};

export namespace WorkflowSyntaxNodeOutputWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeOutputWebModel';
}
