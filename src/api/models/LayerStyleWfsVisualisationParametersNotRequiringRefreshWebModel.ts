/* eslint-disable */

import type { LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel } from './LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel';

export type LayerStyleWfsVisualisationParametersNotRequiringRefreshWebModel =
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
     * Title
     */
    title?: string | null;
    /**
     * Subtitle
     */
    subtitle?: string | null;
  };

export namespace LayerStyleWfsVisualisationParametersNotRequiringRefreshWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleWfsVisualisationParametersNotRequiringRefreshWebModel';
}
