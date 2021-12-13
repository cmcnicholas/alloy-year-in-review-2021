/* eslint-disable */

import type { AlloyUserGroupUserCountsWebModel } from './AlloyUserGroupUserCountsWebModel';
import type { AlloyUserGroupWebModel } from './AlloyUserGroupWebModel';
import type { UserGroupOperationsSummaryWebModel } from './UserGroupOperationsSummaryWebModel';

/**
 * Web model for a user group
 */
export type AlloyUserGroupGetWebResponseModel = {
  /**
   * The user group
   */
  group: AlloyUserGroupWebModel;
  /**
   * Related user group information
   */
  userCounts: AlloyUserGroupUserCountsWebModel;
  /**
   * The summary of the UAC operations allowed for this user group
   */
  operationsSummary: UserGroupOperationsSummaryWebModel;
};

export namespace AlloyUserGroupGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserGroupGetWebResponseModel';
}
