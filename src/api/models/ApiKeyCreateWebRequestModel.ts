/* eslint-disable */

/**
 * The web request model used to create an Api key
 */
export type ApiKeyCreateWebRequestModel = {
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
};

export namespace ApiKeyCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApiKeyCreateWebRequestModel';
}
