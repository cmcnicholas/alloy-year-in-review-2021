/* eslint-disable */

import type { WorkflowLogNodeInfoWebModel } from './WorkflowLogNodeInfoWebModel';
import type { WorkflowNodeRunDataWebModel } from './WorkflowNodeRunDataWebModel';

/**
 * Base class for models representing a node on a workflow run.
 * This could be either an action or a trigger.
 */
export type WorkflowLogNodeWebModelBase = {
  /**
   * The identity of the step taken in the workflow
   */
  info: WorkflowLogNodeInfoWebModel;
  /**
   * The output of this step
   */
  output?: WorkflowNodeRunDataWebModel | null;
  discriminator: string;
};

export namespace WorkflowLogNodeWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogNodeWebModelBase';
}
