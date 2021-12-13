/* eslint-disable */

/**
 * The web request model used to edit an Access Policy
 */
export type AccessPolicyEditWebRequestModel = {
  /**
   * The Access Policy name
   */
  name: string;
  /**
   * The Access Policy icon
   */
  enabled: boolean;
  /**
   * The signature is used to ensure that the Access Policy being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same Access Policy
   */
  signature: string;
};

export namespace AccessPolicyEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AccessPolicyEditWebRequestModel';
}
