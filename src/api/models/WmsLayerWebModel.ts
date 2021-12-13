/* eslint-disable */

import type { WmsLayerStyleWebModel } from './WmsLayerStyleWebModel';

/**
 * WMS Layer web model
 */
export type WmsLayerWebModel = {
  /**
   * Layer title as shown to the Alloy user to identify the layer
   */
  title: string;
  /**
   * Layer identifier used to identify the layer in the Web Map Service
   */
  identifier: string;
  /**
   * Optional style override for the layer as an alternative to the default style
   */
  style?: WmsLayerStyleWebModel | null;
  /**
   * Is the layer opaque
   */
  opaque: boolean;
};

export namespace WmsLayerWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WmsLayerWebModel';
}
