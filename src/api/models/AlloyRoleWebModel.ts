/* eslint-disable */

import type { Context } from './Context';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a user role
 */
export type AlloyRoleWebModel = {
  /**
   * The user role name
   */
  name: string;
  /**
   * The user role context
   */
  context: Context;
  /**
   * The user role code
   */
  code: string;
  /**
   * The list of usernames belonging to this user role
   */
  users: Array<string>;
  /**
   * The list of user groups belonging to this user role
   */
  groups: Array<string>;
  /**
   * The metadata to a user role
   */
  metadata: MetadataWebModel;
};

export namespace AlloyRoleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleWebModel';
}
