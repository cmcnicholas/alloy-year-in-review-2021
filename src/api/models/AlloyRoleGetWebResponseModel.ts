/* eslint-disable */

import type { AlloyRoleOperationsSummaryWebModel } from './AlloyRoleOperationsSummaryWebModel';
import type { AlloyRoleWebModel } from './AlloyRoleWebModel';

/**
 * Web model for a user role
 */
export type AlloyRoleGetWebResponseModel = {
  /**
   * The user role
   */
  role: AlloyRoleWebModel;
  /**
   * Related role information
   */
  operationsSummary: AlloyRoleOperationsSummaryWebModel;
};

export namespace AlloyRoleGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleGetWebResponseModel';
}
