/* eslint-disable */

import type { RouteWaypointWebModel } from './RouteWaypointWebModel';
import type { RouteWebModel } from './RouteWebModel';

/**
 * Web response model for the generation of the shortest route
 */
export type GenerateShortestRouteWebResponseModel = {
  /**
   * The resulting route
   */
  route: RouteWebModel;
  /**
   * The resulting route waypoints
   */
  waypoints: Array<RouteWaypointWebModel>;
};

export namespace GenerateShortestRouteWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'GenerateShortestRouteWebResponseModel';
}
