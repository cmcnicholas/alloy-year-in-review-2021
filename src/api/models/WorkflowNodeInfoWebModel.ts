/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';
import type { DodiWebModel } from './DodiWebModel';

/**
 * base class representing a node in a workflow - action or trigger
 */
export type WorkflowNodeInfoWebModel = {
  /**
   * The trigger for the workflow, see implementations for options.
   */
  id: string;
  /**
   * If set, the dodi that this node emits.  When run, it will output items to connected nodes of this dodi type.
   */
  output?: DodiWebModel | null;
  /**
   * If set, the workflow is malformed at least at this node, such that the output could not be computed.
   * This workflow will always produce errors when run.
   */
  error?: AlloyExceptionWebModel | null;
};

export namespace WorkflowNodeInfoWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowNodeInfoWebModel';
}
