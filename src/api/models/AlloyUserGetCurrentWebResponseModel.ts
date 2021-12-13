/* eslint-disable */

import type { AlloyCurrentUserWebModel } from './AlloyCurrentUserWebModel';

/**
 * Web model for current user
 */
export type AlloyUserGetCurrentWebResponseModel = {
  /**
   * The current user
   */
  user: AlloyCurrentUserWebModel;
};

export namespace AlloyUserGetCurrentWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserGetCurrentWebResponseModel';
}
