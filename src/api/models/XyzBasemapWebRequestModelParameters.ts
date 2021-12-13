/* eslint-disable */

import type { BasemapWebRequestModelParametersBase } from './BasemapWebRequestModelParametersBase';

export type XyzBasemapWebRequestModelParameters = BasemapWebRequestModelParametersBase & {
  /**
   * Tile dimensions in pixels
   */
  tileDimensions?: number | null;
};

export namespace XyzBasemapWebRequestModelParameters {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'XyzBasemapWebRequestModelParameters';
}
