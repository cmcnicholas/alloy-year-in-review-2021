/* eslint-disable */

import type { GeoJSONObjectType } from './GeoJSONObjectType';
import type { IPosition } from './IPosition';

export type Point = {
  type: GeoJSONObjectType;
  coordinates: IPosition;
};

export namespace Point {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'Point';
}
