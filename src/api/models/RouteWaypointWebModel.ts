/* eslint-disable */

import type { Point } from './Point';

/**
 * Web model for a route waypoint
 */
export type RouteWaypointWebModel = {
  /**
   * Name of the street the coordinate snapped to
   */
  streetName: string;
  /**
   * The point corresponding to the snapped coordinate
   */
  location: Point;
  /**
   * The distance of the snapped point from the original
   */
  distance: number;
};

export namespace RouteWaypointWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RouteWaypointWebModel';
}
