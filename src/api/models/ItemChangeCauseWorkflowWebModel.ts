/* eslint-disable */

import type { ItemChangeCauseWebModelBase } from './ItemChangeCauseWebModelBase';

export type ItemChangeCauseWorkflowWebModel = ItemChangeCauseWebModelBase & {
  /**
   * The id of the workflow run that caused this change
   */
  workflowRunId: string;
};

export namespace ItemChangeCauseWorkflowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemChangeCauseWorkflowWebModel';
}
