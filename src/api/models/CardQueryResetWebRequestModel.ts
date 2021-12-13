/* eslint-disable */

/**
 * The web request model used to reset a card query
 */
export type CardQueryResetWebRequestModel = {
  /**
   * The signature is used to ensure that the card being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same card
   */
  signature: string;
};

export namespace CardQueryResetWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardQueryResetWebRequestModel';
}
