/* eslint-disable */

import type { ApplicableFromWebModelBase } from './ApplicableFromWebModelBase';
import type { ApplicableToWebModelBase } from './ApplicableToWebModelBase';

/**
 * Request model for an applicable types add operation
 */
export type ApplicableTypeAddWebRequestModel = {
  /**
   * Applicable types to add to
   */
  to: Array<ApplicableToWebModelBase>;
  /**
   * Applicable types to add from
   */
  from: ApplicableFromWebModelBase;
};

export namespace ApplicableTypeAddWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableTypeAddWebRequestModel';
}
