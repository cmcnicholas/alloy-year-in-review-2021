/* eslint-disable */

import type { BasemapWebModelBase } from './BasemapWebModelBase';

export type XyzBasemapWebModel = BasemapWebModelBase & {
  /**
   * Tile Dimensions in pixels
   */
  tileDimensions?: number | null;
};

export namespace XyzBasemapWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'XyzBasemapWebModel';
}
