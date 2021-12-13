/* eslint-disable */

/**
 * The parent abstract class for a route stop object
 */
export type RouteStopWebModelBase = {
  discriminator: string;
};

export namespace RouteStopWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RouteStopWebModelBase';
}
