/* eslint-disable */

/**
 * Web model for create and edit parameters
 */
export type BasemapWebRequestModelParametersBase = {
  /**
   * Name/Title for the basemap
   */
  name: string;
  /**
   * Optional API key
   */
  apiKeyValue?: string | null;
  /**
   * Optional background colour for the layer
   */
  colour?: string | null;
  /**
   * Optional watermark, e.g. a URL
   */
  watermark?: string | null;
  /**
   * URL for the mapping service
   */
  url: string;
  discriminator: string;
};

export namespace BasemapWebRequestModelParametersBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapWebRequestModelParametersBase';
}
