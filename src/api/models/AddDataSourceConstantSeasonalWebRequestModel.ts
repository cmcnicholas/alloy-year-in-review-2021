/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantSeasonalWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The seasonal used as the value for this data source
     */
    valueSeasonal?: string | null;
  };

export namespace AddDataSourceConstantSeasonalWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantSeasonalWebRequestModel';
}
