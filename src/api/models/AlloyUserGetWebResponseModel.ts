/* eslint-disable */

import type { AlloyUserWebModel } from './AlloyUserWebModel';

/**
 * Web model for a user
 */
export type AlloyUserGetWebResponseModel = {
  /**
   * The user
   */
  user: AlloyUserWebModel;
};

export namespace AlloyUserGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserGetWebResponseModel';
}
