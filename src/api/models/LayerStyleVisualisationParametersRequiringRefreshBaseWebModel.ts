/* eslint-disable */

import type { LayerStyleVisualisationParametersBaseWebModel } from './LayerStyleVisualisationParametersBaseWebModel';

export type LayerStyleVisualisationParametersRequiringRefreshBaseWebModel =
  LayerStyleVisualisationParametersBaseWebModel & {
    discriminator: string;
  };

export namespace LayerStyleVisualisationParametersRequiringRefreshBaseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleVisualisationParametersRequiringRefreshBaseWebModel';
}
