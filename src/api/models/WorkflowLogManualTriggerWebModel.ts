/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { WorkflowLogNodeWebModelBase } from './WorkflowLogNodeWebModelBase';

export type WorkflowLogManualTriggerWebModel = WorkflowLogNodeWebModelBase & {
  /**
   * The query to provide the input items for the workflow run. The query should not be specified if the first
   * workflow action does not need any input. Conversely, the query must be specified if the first workflow action
   * needs input, since the workflow could not run without starting from some items
   */
  query?: AqsJsonNode | null;
  /**
   * The username of the user that triggered the workflow
   */
  triggeredByUser: string;
};

export namespace WorkflowLogManualTriggerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogManualTriggerWebModel';
}
