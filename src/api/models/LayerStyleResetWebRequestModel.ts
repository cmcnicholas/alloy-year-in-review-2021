/* eslint-disable */

/**
 * The web request model used to reset a layer style
 */
export type LayerStyleResetWebRequestModel = {
  /**
   * The signature is used to ensure that the layer being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same layer
   */
  signature: string;
};

export namespace LayerStyleResetWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleResetWebRequestModel';
}
