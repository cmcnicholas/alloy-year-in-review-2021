/* eslint-disable */

import type { AlloyRoleOperationsSummaryWebModel } from './AlloyRoleOperationsSummaryWebModel';
import type { AlloyRoleWebModel } from './AlloyRoleWebModel';

/**
 * Web response model for a user role create operation
 */
export type AlloyRoleCreateWebResponseModel = {
  /**
   * The created user role
   */
  role: AlloyRoleWebModel;
  /**
   * Related role information
   */
  operationsSummary: AlloyRoleOperationsSummaryWebModel;
};

export namespace AlloyRoleCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleCreateWebResponseModel';
}
