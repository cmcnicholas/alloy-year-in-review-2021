/* eslint-disable */

/**
 * Bounding box
 */
export type BoundingBoxWebModel = {
  /**
   * Minimum longitude of the bounding box
   */
  lonMin: number;
  /**
   * Minimum latitude of the bounding box
   */
  latMin: number;
  /**
   * Maximum longitude of the bounding box
   */
  lonMax: number;
  /**
   * Maximum latitude of the bounding box
   */
  latMax: number;
};

export namespace BoundingBoxWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BoundingBoxWebModel';
}
