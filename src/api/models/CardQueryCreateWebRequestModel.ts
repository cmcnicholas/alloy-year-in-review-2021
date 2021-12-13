/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';

/**
 * Web request model for a card query create operation
 */
export type CardQueryCreateWebRequestModel = {
  /**
   * The query name to display
   */
  name: string;
  /**
   * The AQS query to execute and display the result for in the card
   */
  aqs: AqsJsonNode;
};

export namespace CardQueryCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardQueryCreateWebRequestModel';
}
