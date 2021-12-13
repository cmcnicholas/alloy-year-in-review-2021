/* eslint-disable */

import type { LayerBasicFeatureWebModel } from './LayerBasicFeatureWebModel';

/**
 * Web response model for a layer Basic tile get operation
 */
export type LayerGetBasicTileWebResponseModel = {
  /**
   * The array of features matching the query, empty if none found
   */
  results: Array<LayerBasicFeatureWebModel>;
};

export namespace LayerGetBasicTileWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerGetBasicTileWebResponseModel';
}
