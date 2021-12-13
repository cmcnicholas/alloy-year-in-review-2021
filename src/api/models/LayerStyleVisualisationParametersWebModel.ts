/* eslint-disable */

import type { LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel } from './LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel';
import type { LayerStyleVisualisationParametersRequiringRefreshBaseWebModel } from './LayerStyleVisualisationParametersRequiringRefreshBaseWebModel';
import type { LayerVisualisationType } from './LayerVisualisationType';

/**
 * Layer Style visualisation parameters web model
 */
export type LayerStyleVisualisationParametersWebModel = {
  /**
   * Type of visualisation
   */
  visualisation: LayerVisualisationType;
  /**
   * Parameters requiring refresh
   */
  parametersRequiringRefresh?: LayerStyleVisualisationParametersRequiringRefreshBaseWebModel | null;
  /**
   * Parameters not requiring refresh
   */
  parametersNotRequiringRefresh?: LayerStyleVisualisationParametersNotRequiringRefreshBaseWebModel | null;
};

export namespace LayerStyleVisualisationParametersWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleVisualisationParametersWebModel';
}
