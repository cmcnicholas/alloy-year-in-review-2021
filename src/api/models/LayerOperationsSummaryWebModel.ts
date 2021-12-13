/* eslint-disable */

/**
 * Web model for layer operation summary
 */
export type LayerOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this layer
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this layer
   */
  canDelete: boolean;
};

export namespace LayerOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerOperationsSummaryWebModel';
}
