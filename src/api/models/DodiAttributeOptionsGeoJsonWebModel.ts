/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';
import type { GeoJSONObjectType } from './GeoJSONObjectType';
import type { IGeometryObject } from './IGeometryObject';

export type DodiAttributeOptionsGeoJsonWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The allowed geometries for this attribute
   */
  allows: Array<GeoJSONObjectType>;
  /**
   * The optional default value of this attribute
   */
  defaultValue?: IGeometryObject | null;
};

export namespace DodiAttributeOptionsGeoJsonWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsGeoJsonWebModel';
}
