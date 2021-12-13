/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { RouteStopWebModelBase } from './RouteStopWebModelBase';

/**
 * Web request model for editing of driving route
 */
export type DrivingRouteEditWebRequestModel = {
  /**
   * Route name
   */
  name?: string | null;
  /**
   * The stops to route along, these are either lon lat coordinates or tasks/waypoints item ids to visit.
   */
  routeStops: Array<RouteStopWebModelBase>;
  /**
   * The Collection to which this route belongs to, defaulting to Live
   */
  collection?: CollectionCode | null;
  /**
   * The item icon code, if specified, otherwise the design icon is used instead
   */
  icon?: string | null;
  /**
   * The item colour, if specified, otherwise the design colour is used instead
   */
  colour?: string | null;
};

export namespace DrivingRouteEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DrivingRouteEditWebRequestModel';
}
