/* eslint-disable */

/**
 * Web model for role operation summary
 */
export type AlloyRoleOperationsSummaryWebModel = {
  /**
   * If true, the current user has permissions to edit this role
   */
  canWrite: boolean;
  /**
   * If true, the current user has permissions to delete this role
   */
  canDelete: boolean;
};

export namespace AlloyRoleOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleOperationsSummaryWebModel';
}
