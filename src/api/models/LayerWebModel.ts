/* eslint-disable */

import type { Context } from './Context';
import type { LayerStyleWebModel } from './LayerStyleWebModel';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a layer
 */
export type LayerWebModel = {
  /**
   * The layer name
   */
  name: string;
  /**
   * The layer Guc
   */
  code: string;
  /**
   * The Context of the layer
   */
  context: Context;
  /**
   * The styles within the layer
   */
  styles: Array<LayerStyleWebModel>;
  /**
   * The tags associated to this layer
   */
  tags?: Array<string> | null;
  /**
   * Layer is disabled or not
   */
  disabled: boolean;
  /**
   * The build frequency (in minutes) for the layer. If it is set to 5 minutes, then a layer will refresh at most
   * once every 5 minutes, even if items within it change every second. By default the build frequency is 1 minute
   */
  buildFrequencyMinutes?: number | null;
  /**
   * The metadata of a layer
   */
  metadata: MetadataWebModel;
};

export namespace LayerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerWebModel';
}
