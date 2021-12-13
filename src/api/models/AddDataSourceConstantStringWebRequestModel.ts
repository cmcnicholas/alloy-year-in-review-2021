/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantStringWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The text used as the value for this data source
     */
    valueText?: string | null;
  };

export namespace AddDataSourceConstantStringWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantStringWebRequestModel';
}
