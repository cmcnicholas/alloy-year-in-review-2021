/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantDateTimeWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The datetime used as the value for this data source
     */
    valueDateTime?: string | null;
  };

export namespace AddDataSourceConstantDateTimeWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantDateTimeWebRequestModel';
}
