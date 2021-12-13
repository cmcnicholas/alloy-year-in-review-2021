/* eslint-disable */

import type { RouteStopWebModelBase } from './RouteStopWebModelBase';

export type RouteStopItemWebModel = RouteStopWebModelBase & {
  /**
   * Task or waypoint item id to route along and link route waypoint to
   */
  itemId: string;
};

export namespace RouteStopItemWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RouteStopItemWebModel';
}
