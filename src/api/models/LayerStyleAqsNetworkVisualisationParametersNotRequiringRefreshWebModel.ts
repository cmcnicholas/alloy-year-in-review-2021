/* eslint-disable */

import type { LayerStyleLabelMode } from './LayerStyleLabelMode';
import type { LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel } from './LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel';

export type LayerStyleAqsNetworkVisualisationParametersNotRequiringRefreshWebModel =
  LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel & {
    /**
     * Weight
     */
    weight?: number | null;
    /**
     * Show icons
     */
    showIcons?: boolean | null;
    /**
     * Alpha
     */
    alpha?: number | null;
    /**
     * Label mode
     */
    labelMode?: LayerStyleLabelMode | null;
  };

export namespace LayerStyleAqsNetworkVisualisationParametersNotRequiringRefreshWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'LayerStyleAqsNetworkVisualisationParametersNotRequiringRefreshWebModel';
}
