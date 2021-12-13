/* eslint-disable */

import type { GeoJSONObjectType } from './GeoJSONObjectType';
import type { IPosition } from './IPosition';

export type LineString = {
  type: GeoJSONObjectType;
  coordinates: Array<IPosition>;
};

export namespace LineString {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LineString';
}
