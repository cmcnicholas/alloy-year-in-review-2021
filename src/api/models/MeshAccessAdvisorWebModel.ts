/* eslint-disable */

import type { MeshAllowedAction } from './MeshAllowedAction';
import type { MeshWebModel } from './MeshWebModel';

/**
 * Web model for a mesh access advisor
 */
export type MeshAccessAdvisorWebModel = {
  /**
   * The retrieved mesh
   */
  mesh: MeshWebModel;
  /**
   * The winning permissions that users have on this mesh (for all user groups they belong to)
   */
  winningPermission: MeshAllowedAction;
};

export namespace MeshAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshAccessAdvisorWebModel';
}
