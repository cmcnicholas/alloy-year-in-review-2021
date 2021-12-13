/* eslint-disable */

import type { CardOperationsSummaryWebModel } from './CardOperationsSummaryWebModel';
import type { CardPermissionResponseWebModel } from './CardPermissionResponseWebModel';
import type { CardWebModel } from './CardWebModel';

/**
 * Web model for a card
 */
export type CardWithPermissionsWebResponseModel = {
  /**
   * The retrieved card
   */
  card: CardWebModel;
  /**
   * The summary of the UAC operations allowed for this card
   */
  operationsSummary: CardOperationsSummaryWebModel;
  /**
   * The user groups associated to this card
   */
  permissions: Array<CardPermissionResponseWebModel>;
};

export namespace CardWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardWithPermissionsWebResponseModel';
}
