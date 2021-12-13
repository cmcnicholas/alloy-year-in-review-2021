/* eslint-disable */

/**
 * WMS layer style legend
 */
export type WmsLayerStyleLegendWebModel = {
  /**
   * URL of style legend
   */
  url: string;
  /**
   * Width of style legend
   */
  widthPixels: number;
  /**
   * Height of style legend
   */
  heightPixels: number;
};

export namespace WmsLayerStyleLegendWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WmsLayerStyleLegendWebModel';
}
