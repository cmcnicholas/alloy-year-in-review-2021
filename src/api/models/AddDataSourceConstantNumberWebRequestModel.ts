/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantNumberWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The number used as the value for this data source
     */
    valueNumber?: number | null;
  };

export namespace AddDataSourceConstantNumberWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantNumberWebRequestModel';
}
