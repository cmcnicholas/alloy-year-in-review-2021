/* eslint-disable */

import type { DodiAllowedOperation } from './DodiAllowedOperation';
import type { DodiAttributeAllowedAction } from './DodiAttributeAllowedAction';
import type { DodiWebModel } from './DodiWebModel';

/**
 * Web model for a dodi with attributes access advisor
 */
export type DodiAccessAdvisorWebModel = {
  /**
   * The retrieved dodi
   */
  dodi: DodiWebModel;
  /**
   * The winning dodi permissions that users have on this dodi (for all user groups they belong to)
   */
  winningDodiPermissions: Array<DodiAllowedOperation>;
  /**
   * The winning dodi attribute permission that users have for this dodi
   */
  winningDodiAttributePermissions: Record<string, DodiAttributeAllowedAction>;
};

export namespace DodiAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAccessAdvisorWebModel';
}
