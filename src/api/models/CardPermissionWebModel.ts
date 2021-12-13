/* eslint-disable */

import type { CardAllowedAction } from './CardAllowedAction';

/**
 * Web model for a card permission
 */
export type CardPermissionWebModel = {
  /**
   * The Guc of the user group with permissions on this card
   */
  userGroupCode: string;
  /**
   * The permissions that this group has on this card
   */
  allows: CardAllowedAction;
};

export namespace CardPermissionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardPermissionWebModel';
}
