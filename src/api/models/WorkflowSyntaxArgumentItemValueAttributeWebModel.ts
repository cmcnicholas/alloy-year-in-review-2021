/* eslint-disable */

import type { WorkflowSyntaxArgumentItemValueBaseWebModel } from './WorkflowSyntaxArgumentItemValueBaseWebModel';

export type WorkflowSyntaxArgumentItemValueAttributeWebModel =
  WorkflowSyntaxArgumentItemValueBaseWebModel & {
    /**
     * the attribute code to select
     */
    attributeCode: string;
  };

export namespace WorkflowSyntaxArgumentItemValueAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxArgumentItemValueAttributeWebModel';
}
