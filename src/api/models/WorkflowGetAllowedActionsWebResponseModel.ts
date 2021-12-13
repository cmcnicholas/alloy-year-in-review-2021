/* eslint-disable */

import type { DesignWebModel } from './DesignWebModel';

/**
 * Model for the allowed actions that can be added to a position in a workflow
 */
export type WorkflowGetAllowedActionsWebResponseModel = {
  /**
   * The designs corresponding to types of actions that could be added
   * to this position in the workflow queried
   */
  actionTypes?: Array<DesignWebModel> | null;
};

export namespace WorkflowGetAllowedActionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowGetAllowedActionsWebResponseModel';
}
