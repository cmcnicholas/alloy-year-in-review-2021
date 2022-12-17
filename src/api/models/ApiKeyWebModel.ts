/* eslint-disable */

import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for an Api key
 */
export type ApiKeyWebModel = {
  /**
   * The AId of this Api key>
   */
  id?: string | null;
  /**
   * The username of the user this Api key belongs to
   */
  username: string;
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
   * The metadata for an Api key
   */
  metadata: MetadataWebModel;
};

export namespace ApiKeyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApiKeyWebModel';
}
