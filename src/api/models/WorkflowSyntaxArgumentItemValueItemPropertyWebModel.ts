/* eslint-disable */

import type { WorkflowItemPropertyType } from './WorkflowItemPropertyType';
import type { WorkflowSyntaxArgumentItemValueBaseWebModel } from './WorkflowSyntaxArgumentItemValueBaseWebModel';

export type WorkflowSyntaxArgumentItemValueItemPropertyWebModel =
  WorkflowSyntaxArgumentItemValueBaseWebModel & {
    /**
     * the item property to select
     */
    property: WorkflowItemPropertyType;
  };

export namespace WorkflowSyntaxArgumentItemValueItemPropertyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxArgumentItemValueItemPropertyWebModel';
}
