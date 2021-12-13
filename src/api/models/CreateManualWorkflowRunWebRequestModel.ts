/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';

/**
 * Web request model for a Workflow manual run operation
 */
export type CreateManualWorkflowRunWebRequestModel = {
  /**
   * The query representing the items to trigger the workflow with
   */
  query?: AqsJsonNode | null;
};

export namespace CreateManualWorkflowRunWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CreateManualWorkflowRunWebRequestModel';
}
