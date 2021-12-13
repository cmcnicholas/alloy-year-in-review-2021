/* eslint-disable */

import type { DodiAttributeWebModel } from './DodiAttributeWebModel';
import type { DodiWebModel } from './DodiWebModel';
import type { WorkflowActionInputMode } from './WorkflowActionInputMode';
import type { WorkflowActionOutputMode } from './WorkflowActionOutputMode';

/**
 * Web response model for the required and optional parameters
 * needed for a workflow action group action.
 * This response can change when the supplied parameter values marked with WorkflowDynamicParameter change value.
 */
export type WorkflowActionGroupGetActionParametersWebResponseModel = {
  /**
   * The input dodi type that this action will receive.
   */
  input?: DodiWebModel | null;
  /**
   * The behaviour of the action on its input
   */
  inputMode: WorkflowActionInputMode;
  /**
   * The output dodi type that this action will emit.
   */
  output?: DodiWebModel | null;
  /**
   * The behaviour of the action for its output
   */
  outputMode: WorkflowActionOutputMode;
  /**
   * Complete set of parameters needed by an action of queried type and position in workflow action group.  This can contain
   * attributes that are not part of the action design.
   * If the system can infer the value, it may set the attribute required property to false, even though
   * it will remain true on the design the attribute belongs to.
   */
  parameters?: Array<DodiAttributeWebModel> | null;
};

export namespace WorkflowActionGroupGetActionParametersWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupGetActionParametersWebResponseModel';
}
