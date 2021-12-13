/* eslint-disable */

import type { ItemFormOperationsSummaryWebModel } from './ItemFormOperationsSummaryWebModel';
import type { ItemFormPermissionResponseWebModel } from './ItemFormPermissionResponseWebModel';
import type { ItemFormWebModel } from './ItemFormWebModel';

/**
 * Web model for an item form
 */
export type ItemFormWithPermissionsWebResponseModel = {
  /**
   * The retrieved item form
   */
  itemForm: ItemFormWebModel;
  /**
   * The summary of the UAC operations allowed for this item form
   */
  operationsSummary: ItemFormOperationsSummaryWebModel;
  /**
   * The user groups associated to this item form
   */
  permissions: Array<ItemFormPermissionResponseWebModel>;
};

export namespace ItemFormWithPermissionsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormWithPermissionsWebResponseModel';
}
