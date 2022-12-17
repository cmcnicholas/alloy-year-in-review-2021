/* eslint-disable */

import type { ApplicableFromWebModelBase } from './ApplicableFromWebModelBase';
import type { ApplicableToWebModelBase } from './ApplicableToWebModelBase';

/**
 * Request model for an applicable types remove operation
 */
export type ApplicableTypeRemoveWebRequestModel = {
  /**
   * Applicable types to remove to
   */
  to: Array<ApplicableToWebModelBase>;
  /**
   * Applicable types to remove from
   */
  from: ApplicableFromWebModelBase;
};

export namespace ApplicableTypeRemoveWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableTypeRemoveWebRequestModel';
}
