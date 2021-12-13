/* eslint-disable */

import type { CardOperationsSummaryWebModel } from './CardOperationsSummaryWebModel';
import type { CardWebModel } from './CardWebModel';

/**
 * Web model for a card
 */
export type CardWithOperationsSummaryWebResponseModel = {
  /**
   * The retrieved card
   */
  card: CardWebModel;
  /**
   * The summary of the UAC operations allowed for this card
   */
  operationsSummary: CardOperationsSummaryWebModel;
};

export namespace CardWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardWithOperationsSummaryWebResponseModel';
}
