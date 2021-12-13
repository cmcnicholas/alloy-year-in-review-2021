/* eslint-disable */

import type { GeoJSONObjectType } from './GeoJSONObjectType';

/**
 * Web model for dodi geometry allowed types
 */
export type DodiGeometryAllowsWebModel = {
  /**
   * The GeoJson types allowed for the item geometries
   */
  values: Array<GeoJSONObjectType>;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this geometry allowed types
   */
  parent: string;
};

export namespace DodiGeometryAllowsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiGeometryAllowsWebModel';
}
