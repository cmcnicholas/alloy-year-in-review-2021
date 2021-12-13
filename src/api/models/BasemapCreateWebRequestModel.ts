/* eslint-disable */

import type { BasemapWebRequestModelParametersBase } from './BasemapWebRequestModelParametersBase';

/**
 * Web request model to create a basemap
 */
export type BasemapCreateWebRequestModel = {
  /**
   * Parameters required for creating the basemap
   */
  createParameters: BasemapWebRequestModelParametersBase;
};

export namespace BasemapCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapCreateWebRequestModel';
}
