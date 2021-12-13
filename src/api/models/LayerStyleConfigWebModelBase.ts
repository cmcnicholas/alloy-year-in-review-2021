/* eslint-disable */

/**
 * The parent abstract class for a layer style config object
 */
export type LayerStyleConfigWebModelBase = {
  discriminator: string;
};

export namespace LayerStyleConfigWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleConfigWebModelBase';
}
