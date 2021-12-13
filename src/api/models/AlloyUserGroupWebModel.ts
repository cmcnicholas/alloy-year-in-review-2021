/* eslint-disable */

import type { Context } from './Context';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a user group
 */
export type AlloyUserGroupWebModel = {
  /**
   * The user group name
   */
  name: string;
  /**
   * The user group context
   */
  context: Context;
  /**
   * The user group code
   */
  code: string;
  /**
   * The list of usernames belonging to this user group
   */
  users: Array<string>;
  /**
   * User group tags are used by the application to set some special behaviours.
   */
  tags: Array<string>;
  /**
   * The metadata to a user group
   */
  metadata: MetadataWebModel;
};

export namespace AlloyUserGroupWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserGroupWebModel';
}
