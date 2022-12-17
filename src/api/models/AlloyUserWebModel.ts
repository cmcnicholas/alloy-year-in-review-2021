/* eslint-disable */

import type { AlloyUserSettingWebModel } from './AlloyUserSettingWebModel';

/**
 * Web model for an alloy user
 */
export type AlloyUserWebModel = {
  /**
   * The username of the user
   */
  username: string;
  /**
   * The user unique id
   */
  userId: string;
  /**
   * The email of the user
   */
  email: string;
  /**
   * The first name of the user
   */
  firstName: string;
  /**
   * The last name of the user
   */
  lastName: string;
  /**
   * The datetime at which the user was created
   */
  createdDate: string;
  /**
   * The tags for the user
   */
  tags?: Array<string> | null;
  /**
   * If false, the user is disabled and cannot be used
   */
  enabled: boolean;
  /**
   * If false, the user has yet not verified the account by clicking the link in the email
   */
  verified: boolean;
  /**
   * If set, this is the expiration date for a user, after which it won't be possible for this user to login
   */
  expires?: string | null;
  /**
   * Optional list of user settings
   */
  settings: Array<AlloyUserSettingWebModel>;
};

export namespace AlloyUserWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserWebModel';
}
