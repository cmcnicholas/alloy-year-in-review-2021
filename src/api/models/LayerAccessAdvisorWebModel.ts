/* eslint-disable */

import type { LayerAllowedAction } from './LayerAllowedAction';
import type { LayerWebModel } from './LayerWebModel';

/**
 * Web model for a layer access advisor
 */
export type LayerAccessAdvisorWebModel = {
  /**
   * The retrieved layer
   */
  layer: LayerWebModel;
  /**
   * The winning permissions that users have on this layer (for all user groups they belong to)
   */
  winningPermission: LayerAllowedAction;
};

export namespace LayerAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerAccessAdvisorWebModel';
}
