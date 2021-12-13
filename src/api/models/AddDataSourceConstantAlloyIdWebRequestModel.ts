/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantAlloyIdWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The Alloy id used as the value for this data source
     */
    valueAlloyId?: string | null;
  };

export namespace AddDataSourceConstantAlloyIdWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantAlloyIdWebRequestModel';
}
