/* eslint-disable */

import type { AlloyUserWebModel } from './AlloyUserWebModel';

/**
 * Web response model for customer user
 */
export type CustomerUserEditWebResponseModel = {
  /**
   * The user
   */
  user: AlloyUserWebModel;
};

export namespace CustomerUserEditWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerUserEditWebResponseModel';
}
