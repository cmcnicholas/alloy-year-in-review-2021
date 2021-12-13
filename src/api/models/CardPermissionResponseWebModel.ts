/* eslint-disable */

import type { CardPermissionWebModel } from './CardPermissionWebModel';

export type CardPermissionResponseWebModel = CardPermissionWebModel & {
  /**
   * Name of the user group with permissions on this card
   */
  userGroupName: string;
};

export namespace CardPermissionResponseWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardPermissionResponseWebModel';
}
