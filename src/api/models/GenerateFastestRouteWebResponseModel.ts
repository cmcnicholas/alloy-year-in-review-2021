/* eslint-disable */

import type { RouteWaypointWebModel } from './RouteWaypointWebModel';
import type { RouteWebModel } from './RouteWebModel';

/**
 * Web response model for the generation of the fastest route
 */
export type GenerateFastestRouteWebResponseModel = {
  /**
   * The resulting route
   */
  route: RouteWebModel;
  /**
   * The resulting route waypoints
   */
  waypoints: Array<RouteWaypointWebModel>;
};

export namespace GenerateFastestRouteWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'GenerateFastestRouteWebResponseModel';
}
