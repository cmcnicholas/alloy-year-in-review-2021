/* eslint-disable */

import type { AlloyUserGroupWebModel } from './AlloyUserGroupWebModel';
import type { UserGroupOperationsSummaryWebModel } from './UserGroupOperationsSummaryWebModel';

/**
 * Web response model for a user group edit operation
 */
export type UserGroupEditWebResponseModel = {
  /**
   * The edited user group
   */
  userGroup: AlloyUserGroupWebModel;
  /**
   * Related user group information
   */
  operationsSummary: UserGroupOperationsSummaryWebModel;
};

export namespace UserGroupEditWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'UserGroupEditWebResponseModel';
}
