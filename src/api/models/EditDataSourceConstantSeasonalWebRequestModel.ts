/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceConstantSeasonalWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The seasonal used as the value for this data source
     */
    valueSeasonal?: string | null;
  };

export namespace EditDataSourceConstantSeasonalWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantSeasonalWebRequestModel';
}
