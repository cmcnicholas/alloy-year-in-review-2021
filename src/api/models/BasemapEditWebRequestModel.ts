/* eslint-disable */

import type { BasemapWebRequestModelParametersBase } from './BasemapWebRequestModelParametersBase';

/**
 * The web request model used to edit a basemap
 */
export type BasemapEditWebRequestModel = {
  /**
   * The basemap parameters
   */
  editParameters: BasemapWebRequestModelParametersBase;
  /**
   * The signature is used to ensure that the basemap being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same basemap
   */
  signature: string;
};

export namespace BasemapEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapEditWebRequestModel';
}
