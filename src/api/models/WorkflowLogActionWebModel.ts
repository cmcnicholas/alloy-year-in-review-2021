/* eslint-disable */

import type { WorkflowActionParameterValueWebModelBase } from './WorkflowActionParameterValueWebModelBase';
import type { WorkflowLogNodeWebModelBase } from './WorkflowLogNodeWebModelBase';
import type { WorkflowNodeRunDataWebModel } from './WorkflowNodeRunDataWebModel';

export type WorkflowLogActionWebModel = WorkflowLogNodeWebModelBase & {
  /**
   * The parameters the action was created with
   */
  parameters: Array<WorkflowActionParameterValueWebModelBase>;
  /**
   * The inputs the action has received
   */
  input?: WorkflowNodeRunDataWebModel | null;
};

export namespace WorkflowLogActionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogActionWebModel';
}
