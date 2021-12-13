/* eslint-disable */

import type { BasemapOperationsSummaryWebModel } from './BasemapOperationsSummaryWebModel';
import type { BasemapPermissionResponseWebModel } from './BasemapPermissionResponseWebModel';
import type { BasemapWebModelBase } from './BasemapWebModelBase';

/**
 * Web model for a Workflow
 */
export type BasemapWithPermissionsWebResponseModel = {
  /**
   * The Workflow returned as a result
   */
  basemap: BasemapWebModelBase;
  /**
   * The summary of the UAC operations allowed for this Workflow
   */
  operationsSummary: BasemapOperationsSummaryWebModel;
  /**
   * The user groups associated to this workflow
   */
  permissions: Array<BasemapPermissionResponseWebModel>;
};

export namespace BasemapWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'BasemapWithPermissionsWebResponseModel';
}
