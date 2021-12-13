/* eslint-disable */

import type { Context } from './Context';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Base Web model for a basemap
 */
export type BasemapWebModelBase = {
  /**
   * The basemap name
   */
  name: string;
  /**
   * The basemap Context
   */
  context: Context;
  /**
   * The unique basemap code
   */
  code: string;
  /**
   * The metadata to a basemap
   */
  metadata: MetadataWebModel;
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

export namespace BasemapWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapWebModelBase';
}
