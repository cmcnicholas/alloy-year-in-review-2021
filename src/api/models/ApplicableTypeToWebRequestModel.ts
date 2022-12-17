/* eslint-disable */

import type { ApplicableFromWebModelBase } from './ApplicableFromWebModelBase';

/**
 * Request model for a list applicable to operation
 */
export type ApplicableTypeToWebRequestModel = {
  /**
   * The applicable types to list from
   */
  from: ApplicableFromWebModelBase;
};

export namespace ApplicableTypeToWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableTypeToWebRequestModel';
}
