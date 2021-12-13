/* eslint-disable */

import type { CustomerWebModel } from './CustomerWebModel';

/**
 * Response model for get operation on CustomerWebModel
 */
export type CustomerGetWebResponseModel = {
  /**
   * The retrieved customer
   */
  customer: CustomerWebModel;
};

export namespace CustomerGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerGetWebResponseModel';
}
