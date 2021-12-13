/* eslint-disable */

import type { UserSessionWebModel } from './UserSessionWebModel';

/**
 * Web model for a user session
 */
export type UserSessionGetWebResponseModel = {
  /**
   * The session token
   */
  userSession: UserSessionWebModel;
};

export namespace UserSessionGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserSessionGetWebResponseModel';
}
