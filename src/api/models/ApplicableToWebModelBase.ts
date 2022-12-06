/* eslint-disable */

/**
 * Base class for applicable to types
 */
export type ApplicableToWebModelBase = {
  discriminator: string;
};

export namespace ApplicableToWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableToWebModelBase';
}
