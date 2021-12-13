/* eslint-disable */

import type { LayerOperationsSummaryWebModel } from './LayerOperationsSummaryWebModel';
import type { LayerPermissionResponseWebModel } from './LayerPermissionResponseWebModel';
import type { LayerWebModel } from './LayerWebModel';

/**
 * Web model for a layer
 */
export type LayerWithPermissionsWebResponseModel = {
  /**
   * The retrieved layer
   */
  layer: LayerWebModel;
  /**
   * The summary of the UAC operations allowed for this layer
   */
  operationsSummary: LayerOperationsSummaryWebModel;
  /**
   * The user groups associated with this layer
   */
  permissions: Array<LayerPermissionResponseWebModel>;
};

export namespace LayerWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerWithPermissionsWebResponseModel';
}
