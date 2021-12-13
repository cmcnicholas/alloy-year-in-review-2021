/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceConstantAlloyIdWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The Alloy id used as the value for this data source
     */
    valueAlloyId?: string | null;
  };

export namespace EditDataSourceConstantAlloyIdWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantAlloyIdWebRequestModel';
}
