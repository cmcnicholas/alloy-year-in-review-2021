/* eslint-disable */

import type { LayerStyleVisualisationParametersRequiringRefreshBaseWebModel } from './LayerStyleVisualisationParametersRequiringRefreshBaseWebModel';

export type LayerStyleAqsClusterVisualisationParametersRequiringRefreshWebModel =
  LayerStyleVisualisationParametersRequiringRefreshBaseWebModel & {
    /**
     * Only show cluster blobs where the tile contains the item's centroid
     */
    clusterCentroidsOnly?: boolean | null;
  };

export namespace LayerStyleAqsClusterVisualisationParametersRequiringRefreshWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'LayerStyleAqsClusterVisualisationParametersRequiringRefreshWebModel';
}
