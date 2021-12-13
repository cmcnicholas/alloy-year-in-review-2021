/* eslint-disable */

import type { WorkflowLogWebModel } from './WorkflowLogWebModel';

/**
 * Web model for a Workflow
 */
export type WorkflowLogsGetWebResponseModel = {
  /**
   * The Workflow returned as a result
   */
  workflowLogs: Array<WorkflowLogWebModel>;
};

export namespace WorkflowLogsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowLogsGetWebResponseModel';
}
