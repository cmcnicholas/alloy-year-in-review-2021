/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';
import type { AqsJsonNode } from './AqsJsonNode';
import type { CardQueryValidity } from './CardQueryValidity';

/**
 * Web model for a card query which is either an Aqs Query or an Aqs MathAggregation
 */
export type CardQueryWebModel = {
  /**
   * The card query Alloy Id
   */
  id: string;
  /**
   * The query name to display
   */
  name: string;
  /**
   * The AQS query to execute and display the result for in the card
   */
  aqs: AqsJsonNode;
  /**
   * The value for this card query. Only available if the card has already been precomputed
   */
  value?: number | null;
  /**
   * It gives an indication of the query validity. If invalid, it tells whether
   * it is a case it is possible recover from or not
   */
  validity: CardQueryValidity;
  /**
   * If the query is invalid, it explains what error made it invalid
   */
  error?: AlloyExceptionWebModel | null;
};

export namespace CardQueryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardQueryWebModel';
}
