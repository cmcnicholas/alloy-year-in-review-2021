/* eslint-disable */

import type { LayerStyleVisualisationParametersBaseWebModel } from './LayerStyleVisualisationParametersBaseWebModel';

export type LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel =
  LayerStyleVisualisationParametersBaseWebModel & {
    discriminator: string;
  };

export namespace LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel';
}
