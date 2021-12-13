/* eslint-disable */

import type { LayerStyleCreateWebModel } from './LayerStyleCreateWebModel';

/**
 * Web request model to create a layer
 */
export type LayerCreateWebRequestModel = {
  /**
   * The name of the layer
   */
  name: string;
  /**
   * The layer styles to have on the layer upon creation
   */
  layerStyles?: Array<LayerStyleCreateWebModel> | null;
  /**
   * The layer tags
   */
  tags?: Array<string> | null;
  /**
   * Layer is disabled or not
   */
  disabled?: boolean | null;
  /**
   * The build frequency (in minutes) for the layer. If it is set to 5 minutes, then a layer will refresh at most
   * once every 5 minutes, even if items within it change every second. By default the build frequency is 1 minute
   */
  buildFrequencyMinutes?: number | null;
};

export namespace LayerCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerCreateWebRequestModel';
}
