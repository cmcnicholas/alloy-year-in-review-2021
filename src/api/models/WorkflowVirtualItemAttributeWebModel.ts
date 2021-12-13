/* eslint-disable */

import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';

export type WorkflowVirtualItemAttributeWebModel = WorkflowActionParameterValueWebModelBase & {
  /**
   * The attribute to apply the virtual definition to
   */
  attributeCode: string;
  /**
   * The virtual definition
   */
  virtualDefinition: string;
};

export namespace WorkflowVirtualItemAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowVirtualItemAttributeWebModel';
}
