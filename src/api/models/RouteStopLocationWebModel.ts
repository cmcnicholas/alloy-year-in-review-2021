/* eslint-disable */

import type { RouteStopWebModelBase } from './RouteStopWebModelBase';

export type RouteStopLocationWebModel = RouteStopWebModelBase & {
  /**
   * Longitude in degrees to route along
   */
  longitude: number;
  /**
   * Latitude in degrees  to route along
   */
  latitude: number;
  /**
   * Waypoint name (optional).
   *
   * If not present then the waypoint uses the name assigned by the routing engine, or 'WP (index)' if nothing was assigned
   */
  name?: string | null;
};

export namespace RouteStopLocationWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RouteStopLocationWebModel';
}
