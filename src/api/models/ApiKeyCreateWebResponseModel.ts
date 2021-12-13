/* eslint-disable */

import type { ApiKeyWebModel } from './ApiKeyWebModel';

/**
 * The web response model used to create an Api key
 */
export type ApiKeyCreateWebResponseModel = {
  /**
   * The model containing the info about the created Api key
   */
  apiKeyInfo?: ApiKeyWebModel | null;
  /**
   * Api key generated. This is only visible once in this response and it will not be possible to fetch it again.
   */
  apiKey?: string | null;
};

export namespace ApiKeyCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApiKeyCreateWebResponseModel';
}
