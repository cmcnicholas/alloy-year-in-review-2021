/* eslint-disable */

import type { PaginatedWebResponseModelWithCountBaseOfApplicableFromResultWebModelBase } from './PaginatedWebResponseModelWithCountBaseOfApplicableFromResultWebModelBase';

export type ApplicableTypeFromWebResponseModel =
  PaginatedWebResponseModelWithCountBaseOfApplicableFromResultWebModelBase & {
    /**
     * Where resulting list is empty allows user to know whether this is due to No Restrictions or
     * Nothing Applies to the requested array of item ids
     */
    noRestrictions: boolean;
  };

export namespace ApplicableTypeFromWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableTypeFromWebResponseModel';
}
