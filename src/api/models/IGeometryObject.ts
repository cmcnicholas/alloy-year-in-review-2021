/* eslint-disable */

import type { GeoJSONObjectType } from './GeoJSONObjectType';

export type IGeometryObject = {
  type?: GeoJSONObjectType;
};

export namespace IGeometryObject {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'IGeometryObject';
}
