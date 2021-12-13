/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';

/**
 * Web request model for a card query create or edit operation
 */
export type CardQueryUpsertWebRequestModel = {
  /**
   * The existing card query AId or leave empty for new card query
   */
  id?: string | null;
  /**
   * The query name to display
   */
  name: string;
  /**
   * The AQS query to execute and display the result for in the card
   */
  aqs: AqsJsonNode;
};

export namespace CardQueryUpsertWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardQueryUpsertWebRequestModel';
}
