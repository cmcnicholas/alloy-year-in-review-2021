/* eslint-disable */

/**
 * Web model for card operation summary
 */
export type CardOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this card
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this card
   */
  canDelete: boolean;
};

export namespace CardOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardOperationsSummaryWebModel';
}
