/* eslint-disable */

/**
 * Web model for mesh operation summary
 */
export type MeshOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this mesh
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this mesh
   */
  canDelete: boolean;
};

export namespace MeshOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshOperationsSummaryWebModel';
}
