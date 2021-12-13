/* eslint-disable */

import type { LayerClusterFeatureWebModel } from './LayerClusterFeatureWebModel';

/**
 * Web response model for a layer cluster tile get operation
 */
export type LayerGetClusterTileWebResponseModel = {
  /**
   * The array of tiles matching the query, empty if none found
   */
  results: Array<LayerClusterFeatureWebModel>;
};

export namespace LayerGetClusterTileWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerGetClusterTileWebResponseModel';
}
