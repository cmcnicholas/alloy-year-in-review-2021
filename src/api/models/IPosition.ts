/* eslint-disable */

export type IPosition = {
  altitude?: number | null;
  latitude?: number;
  longitude?: number;
};

export namespace IPosition {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'IPosition';
}
