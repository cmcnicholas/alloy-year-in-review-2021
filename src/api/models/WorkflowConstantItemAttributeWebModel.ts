/* eslint-disable */

import type { ItemAttributeWebModel } from './ItemAttributeWebModel';
import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';

export type WorkflowConstantItemAttributeWebModel = WorkflowActionParameterValueWebModelBase & {
  /**
   * A constant attribute value
   */
  attribute: ItemAttributeWebModel;
};

export namespace WorkflowConstantItemAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowConstantItemAttributeWebModel';
}
