/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';
import type { LayerStyleConfigWebModelBase } from './LayerStyleConfigWebModelBase';
import type { LayerStyleType } from './LayerStyleType';
import type { LayerStyleValidity } from './LayerStyleValidity';
import type { LayerStyleVisualisationParametersWebModel } from './LayerStyleVisualisationParametersWebModel';

/**
 * Web model for a layer style
 */
export type LayerStyleWebModel = {
  /**
   * The layer style AId
   */
  id: string;
  /**
   * The layer style name
   */
  name: string;
  /**
   * The layer style type
   */
  type: LayerStyleType;
  /**
   * The layer style colour
   */
  colour: string;
  /**
   * The layer style icon
   */
  icon: string;
  /**
   * The layer style config object containing different information depending on the layer type
   */
  config: LayerStyleConfigWebModelBase;
  /**
   * It gives an indication of the style validity. If invalid, it tells whether
   * it is a case it is possible recover from or not
   */
  validity: LayerStyleValidity;
  /**
   * The layer style visualisation parameters
   */
  visualisationParameters: Array<LayerStyleVisualisationParametersWebModel>;
  /**
   * If the style is invalid, it explains what error made it invalid
   */
  error?: AlloyExceptionWebModel | null;
  /**
   * This is the number of items hit byt the style. If non specified the style has not been processed yet
   */
  count?: number | null;
};

export namespace LayerStyleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleWebModel';
}
