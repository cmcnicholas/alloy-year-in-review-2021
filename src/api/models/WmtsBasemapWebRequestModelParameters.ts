/* eslint-disable */

import type { BasemapWebRequestModelParametersBase } from './BasemapWebRequestModelParametersBase';

export type WmtsBasemapWebRequestModelParameters = BasemapWebRequestModelParametersBase & {
  /**
   * WMTS Service layer identifier
   */
  layerIdentifier: string;
  /**
   * WMTS Service style identifier
   */
  styleIdentifier: string;
  /**
   * HidDpi set true if the tile response is at high resolution
   */
  hiDpi: boolean;
  /**
   * Which tile matrix to use from those available (optional).
   * If this is not set, the default matrix is used
   */
  tileMatrixIdentifier?: string | null;
};

export namespace WmtsBasemapWebRequestModelParameters {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WmtsBasemapWebRequestModelParameters';
}
