/* eslint-disable */

/**
 * Web model for user group operation summary
 */
export type UserGroupOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this user group
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this user group
   */
  canDelete: boolean;
};

export namespace UserGroupOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupOperationsSummaryWebModel';
}
