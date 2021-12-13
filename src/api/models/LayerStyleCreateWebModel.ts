/* eslint-disable */

import type { LayerStyleConfigWebModelBase } from './LayerStyleConfigWebModelBase';
import type { LayerStyleVisualisationParametersWebModel } from './LayerStyleVisualisationParametersWebModel';

/**
 * Web model for a layer style edit operation
 */
export type LayerStyleCreateWebModel = {
  /**
   * The name of the layer style
   */
  name: string;
  /**
   * The colour of the layer style
   */
  colour: string;
  /**
   * The icon of the layer style
   */
  icon: string;
  /**
   * The layer style config, that can either be of AQS or WFS type.
   * An AQS style will contain an AQS query while a WFS one will contain the information
   * necessary to query a WFS service
   */
  config: LayerStyleConfigWebModelBase;
  /**
   * The visualisation parameters for the layer style
   */
  visualisationParameters: Array<LayerStyleVisualisationParametersWebModel>;
};

export namespace LayerStyleCreateWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleCreateWebModel';
}
