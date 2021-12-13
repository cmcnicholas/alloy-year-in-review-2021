/* eslint-disable */

import type { CardPermissionResponseWebModel } from './CardPermissionResponseWebModel';

/**
 * Web model for a card permissions get operation
 */
export type CardPermissionsGetWebResponseModel = {
  /**
   * The user groups associated to this card
   */
  permissions: Array<CardPermissionResponseWebModel>;
};

export namespace CardPermissionsGetWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CardPermissionsGetWebResponseModel';
}
