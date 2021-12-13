/* eslint-disable */

import type { LayerNetworkFeatureWebModel } from './LayerNetworkFeatureWebModel';

/**
 * Web response model for a layer cluster tile get operation
 */
export type LayerGetNetworkTileWebResponseModel = {
  /**
   * The array of tiles matching the query, empty if none found
   */
  results: Array<LayerNetworkFeatureWebModel>;
};

export namespace LayerGetNetworkTileWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerGetNetworkTileWebResponseModel';
}
