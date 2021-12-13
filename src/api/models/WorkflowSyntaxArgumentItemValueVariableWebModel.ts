/* eslint-disable */

import type { WorkflowSyntaxArgumentItemValueBaseWebModel } from './WorkflowSyntaxArgumentItemValueBaseWebModel';

export type WorkflowSyntaxArgumentItemValueVariableWebModel =
  WorkflowSyntaxArgumentItemValueBaseWebModel & {
    /**
     * the item property to select
     */
    variableName: string;
  };

export namespace WorkflowSyntaxArgumentItemValueVariableWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxArgumentItemValueVariableWebModel';
}
