/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';
import type { WorkflowLogNodeWebModelBase } from './WorkflowLogNodeWebModelBase';

/**
 * Web model for a Workflow
 */
export type WorkflowLogWebModel = {
  /**
   * The code of the logging workflow
   */
  code: string;
  /**
   * The part of the workflow being logged
   */
  node?: WorkflowLogNodeWebModelBase | null;
  /**
   * The log message
   */
  message: string;
  /**
   * Any error associated with the log
   */
  error?: AlloyExceptionWebModel | null;
  /**
   * The time the log was written
   */
  created: string;
  /**
   * The id of the workflow run the log originated from
   */
  runId: string;
};

export namespace WorkflowLogWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogWebModel';
}
