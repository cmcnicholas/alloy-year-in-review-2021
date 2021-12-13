/* eslint-disable */

import type { BasemapWebModelBase } from './BasemapWebModelBase';
import type { BoundingBoxWebModel } from './BoundingBoxWebModel';
import type { WmsLayerWebModel } from './WmsLayerWebModel';
import type { WmsTileWebModel } from './WmsTileWebModel';

export type WmsBasemapWebModel = BasemapWebModelBase & {
  /**
   * WMS Layers to show in the basemap
   */
  layers: Array<WmsLayerWebModel>;
  /**
   * Optional CRS code for the layer coordinate system. Default to WGS84
   */
  crs?: string | null;
  /**
   * Optional bounding box for the basemap
   */
  boundingBox?: BoundingBoxWebModel | null;
  /**
   * This will be set only if Alloy is requesting tiles from the WMS
   * If not set this means that Alloy will be requesting big images that cover the whole viewport instead
   */
  tile?: WmsTileWebModel | null;
};

export namespace WmsBasemapWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WmsBasemapWebModel';
}
