/* eslint-disable */

/**
 * Web model for basemap operation summary
 */
export type BasemapOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this basemap
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this basemap
   */
  canDelete: boolean;
};

export namespace BasemapOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapOperationsSummaryWebModel';
}
