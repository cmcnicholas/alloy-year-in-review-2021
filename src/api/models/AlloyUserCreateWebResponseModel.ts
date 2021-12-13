/* eslint-disable */

import type { AlloyUserWebModel } from './AlloyUserWebModel';

/**
 * Web model for a user group
 */
export type AlloyUserCreateWebResponseModel = {
  /**
   * The user group
   */
  user: AlloyUserWebModel;
};

export namespace AlloyUserCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserCreateWebResponseModel';
}
