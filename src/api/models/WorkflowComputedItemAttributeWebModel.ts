/* eslint-disable */

import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';
import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

export type WorkflowComputedItemAttributeWebModel = WorkflowActionParameterValueWebModelBase & {
  /**
   * The attribute to apply the virtual definition to
   */
  attributeCode: string;
  /**
   * The syntax that defines how the value will be computed at run time
   */
  value: WorkflowSyntaxNodeBaseWebModel;
};

export namespace WorkflowComputedItemAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowComputedItemAttributeWebModel';
}
