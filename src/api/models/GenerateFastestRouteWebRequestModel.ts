/* eslint-disable */

import type { RouteStopWebModelBase } from './RouteStopWebModelBase';

/**
 * Web request model for the generation of the fastest route
 */
export type GenerateFastestRouteWebRequestModel = {
  /**
   * The stops to route along, these are either lon lat coordinates or tasks/waypoints item ids to visit.
   */
  routeStops: Array<RouteStopWebModelBase>;
};

export namespace GenerateFastestRouteWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'GenerateFastestRouteWebRequestModel';
}
