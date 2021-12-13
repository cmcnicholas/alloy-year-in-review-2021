/* eslint-disable */

import type { LayerStyleEditWebModel } from './LayerStyleEditWebModel';

/**
 * The web request model used to edit a layer
 */
export type LayerEditWebRequestModel = {
  /**
   * The layer name
   */
  name: string;
  /**
   * The layer tags
   */
  tags?: Array<string> | null;
  /**
   * The layer style that will replace any previous styles on this layer
   */
  layerStyles: Array<LayerStyleEditWebModel>;
  /**
   * Layer is disabled or not
   */
  disabled?: boolean;
  /**
   * The build frequency (in minutes) for the layer. If it is set to 5 minutes, then a layer will refresh at most
   * once every 5 minutes, even if items within it change every second. By default the build frequency is 1 minute
   */
  buildFrequencyMinutes?: number | null;
  /**
   * The signature is used to ensure that the layer being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same layer
   */
  signature: string;
};

export namespace LayerEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerEditWebRequestModel';
}
