/* eslint-disable */

import type { AlloyUserGroupWebModel } from './AlloyUserGroupWebModel';
import type { UserGroupOperationsSummaryWebModel } from './UserGroupOperationsSummaryWebModel';

/**
 * Web response model for a user group create operation
 */
export type UserGroupCreateWebResponseModel = {
  /**
   * The created user group
   */
  userGroup: AlloyUserGroupWebModel;
  /**
   * Related user group information
   */
  operationsSummary: UserGroupOperationsSummaryWebModel;
};

export namespace UserGroupCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupCreateWebResponseModel';
}
