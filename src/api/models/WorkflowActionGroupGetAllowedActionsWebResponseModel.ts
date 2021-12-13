/* eslint-disable */

import type { DesignWebModel } from './DesignWebModel';

/**
 * Model for the allowed actions that can be added to a position in a workflow action group
 */
export type WorkflowActionGroupGetAllowedActionsWebResponseModel = {
  /**
   * The designs corresponding to types of actions that could be added
   * to this position in the workflow action group queried
   */
  actionTypes?: Array<DesignWebModel> | null;
};

export namespace WorkflowActionGroupGetAllowedActionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowActionGroupGetAllowedActionsWebResponseModel';
}
