/* eslint-disable */

import type { CardAllowedAction } from './CardAllowedAction';
import type { CardWebModel } from './CardWebModel';

/**
 * Web model for a card access advisor
 */
export type CardAccessAdvisorWebModel = {
  /**
   * The retrieved card
   */
  card: CardWebModel;
  /**
   * The winning permissions that users have on this card (for all user groups they belong to)
   */
  winningPermission: CardAllowedAction;
};

export namespace CardAccessAdvisorWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardAccessAdvisorWebModel';
}
