/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantBooleanWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The boolean used as the value for this data source
     */
    valueBoolean?: boolean | null;
  };

export namespace AddDataSourceConstantBooleanWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantBooleanWebRequestModel';
}
