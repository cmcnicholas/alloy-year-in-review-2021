/* eslint-disable */

import type { AlloyRoleOperationsSummaryWebModel } from './AlloyRoleOperationsSummaryWebModel';
import type { AlloyRoleWebModel } from './AlloyRoleWebModel';

/**
 * Web response model for a user role edit operation
 */
export type AlloyRoleEditWebResponseModel = {
  /**
   * The edited user role
   */
  role: AlloyRoleWebModel;
  /**
   * Related role information
   */
  operationsSummary: AlloyRoleOperationsSummaryWebModel;
};

export namespace AlloyRoleEditWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyRoleEditWebResponseModel';
}
