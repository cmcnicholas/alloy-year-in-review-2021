/* eslint-disable */

import type { LineString } from './LineString';

/**
 * Web model for a route
 */
export type RouteWebModel = {
  /**
   * The whole geometry of the route value
   */
  geometry: LineString;
  /**
   * The distance traveled by the route, in float meters.
   */
  distance: number;
  /**
   * The estimated travel time, in float number of seconds.
   */
  duration: number;
};

export namespace RouteWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RouteWebModel';
}
