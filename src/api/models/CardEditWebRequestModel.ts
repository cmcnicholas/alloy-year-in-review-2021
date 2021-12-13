/* eslint-disable */

import type { CardQueryUpsertWebRequestModel } from './CardQueryUpsertWebRequestModel';

/**
 * The web request model used to edit a card
 */
export type CardEditWebRequestModel = {
  /**
   * The card name
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
   * The card queries that will replace any previous queries on this card
   */
  cardQueries: Array<CardQueryUpsertWebRequestModel>;
  /**
   * The signature is used to ensure that the card being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same card
   */
  signature: string;
};

export namespace CardEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardEditWebRequestModel';
}
