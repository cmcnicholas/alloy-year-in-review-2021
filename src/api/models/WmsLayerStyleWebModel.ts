/* eslint-disable */

import type { WmsLayerStyleLegendWebModel } from './WmsLayerStyleLegendWebModel';

/**
 * WMS Layer Style web model
 */
export type WmsLayerStyleWebModel = {
  /**
   * Style title as shown to the Alloy user to identify the style
   */
  title: string;
  /**
   * Style identifier used to identify the style in the Web Map Service
   */
  identifier: string;
  /**
   * Style Legends
   */
  legends: Array<WmsLayerStyleLegendWebModel>;
};

export namespace WmsLayerStyleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WmsLayerStyleWebModel';
}
