/* eslint-disable */

/**
 * WMS Tile dimensions web model
 */
export type WmsTileWebModel = {
  /**
   * Tile width in pixels
   */
  widthPixels: number;
  /**
   * Tile height in pixels
   */
  heightPixels: number;
};

export namespace WmsTileWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WmsTileWebModel';
}
