/* eslint-disable */

/**
 * The web request model used to edit an Api key
 */
export type ApiKeyEditWebRequestModel = {
  /**
   * The label used to describe this Api key
   */
  label: string;
  /**
   * Whether this api key is enabled or disabled
   */
  enabled: boolean;
  /**
   * Optional expiration date time. After the key has expired it will not be usable or editable anymore and it
   * will have to be deleted
   */
  expireAt?: string | null;
  /**
   * The signature is used to ensure that the Api key being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same Api key
   */
  signature: string;
};

export namespace ApiKeyEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApiKeyEditWebRequestModel';
}
