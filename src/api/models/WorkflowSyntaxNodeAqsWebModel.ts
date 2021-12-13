/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { WorkflowSyntaxNodeBaseWebModel } from './WorkflowSyntaxNodeBaseWebModel';

export type WorkflowSyntaxNodeAqsWebModel = WorkflowSyntaxNodeBaseWebModel & {
  /**
   * The value of the Aqs
   */
  aqs: AqsJsonNode;
};

export namespace WorkflowSyntaxNodeAqsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowSyntaxNodeAqsWebModel';
}
