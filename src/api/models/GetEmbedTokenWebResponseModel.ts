/* eslint-disable */

/**
 * Get embed token web response model
 */
export type GetEmbedTokenWebResponseModel = {
  /**
   * Expiration
   */
  expiration?: string | null;
  /**
   * Token
   */
  token: string;
  /**
   * Token Id
   */
  tokenId: string;
};

export namespace GetEmbedTokenWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'GetEmbedTokenWebResponseModel';
}
