/* eslint-disable */

import type { BasemapWebRequestModelParametersBase } from './BasemapWebRequestModelParametersBase';

export type BingBasemapWebRequestModelParameters = BasemapWebRequestModelParametersBase & {
  /**
   * The Bing Imagery Set identifier, e.g. AerialWithLabelsOnDemand
   */
  imagerySet: string;
};

export namespace BingBasemapWebRequestModelParameters {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BingBasemapWebRequestModelParameters';
}
