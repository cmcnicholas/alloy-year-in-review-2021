/* eslint-disable */

import type { CardQueryCreateWebRequestModel } from './CardQueryCreateWebRequestModel';

/**
 * Web request model to create a card
 */
export type CardCreateWebRequestModel = {
  /**
   * The name of the card
   */
  name: string;
  /**
   * The card icon
   */
  icon: string;
  /**
   * The dodi codes related to the card
   */
  dodiCodes: Array<string>;
  /**
   * The card queries to have on the card upon creation
   */
  cardQueries?: Array<CardQueryCreateWebRequestModel> | null;
};

export namespace CardCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardCreateWebRequestModel';
}
