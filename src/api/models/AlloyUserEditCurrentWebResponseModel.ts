/* eslint-disable */

import type { AlloyCurrentUserWebModel } from './AlloyCurrentUserWebModel';

/**
 * Web response model for editing the current user
 */
export type AlloyUserEditCurrentWebResponseModel = {
  /**
   * The user
   */
  user: AlloyCurrentUserWebModel;
};

export namespace AlloyUserEditCurrentWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserEditCurrentWebResponseModel';
}
