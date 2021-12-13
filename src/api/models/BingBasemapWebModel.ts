/* eslint-disable */

import type { BasemapWebModelBase } from './BasemapWebModelBase';

export type BingBasemapWebModel = BasemapWebModelBase & {
  /**
   * The Bing Imagery Set identifier, e.g. AerialWithLabelsOnDemand
   */
  imagerySet: string;
};

export namespace BingBasemapWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BingBasemapWebModel';
}
