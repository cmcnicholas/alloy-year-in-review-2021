/* eslint-disable */

import type { LayerStyleConfigWebModelBase } from './LayerStyleConfigWebModelBase';

export type LayerStyleConfigWfsWebModel = LayerStyleConfigWebModelBase & {
  /**
   * The wfs base url
   */
  baseUrl: string;
  /**
   * The Epsg Code
   */
  epsgCode: number;
  /**
   * The Wfs layer type
   */
  wfsLayerType: string;
  /**
   * If true, it loads all resources within the layer
   */
  loadAll: boolean;
  /**
   * The version can only be one of "1.1.0", "1.2.0", "1.3.0"
   */
  version: string;
  /**
   * The wfs output format to use
   */
  outputFormat?: string | null;
};

export namespace LayerStyleConfigWfsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleConfigWfsWebModel';
}
