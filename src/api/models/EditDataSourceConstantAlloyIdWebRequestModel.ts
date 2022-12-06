/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantAlloyIdHeadersWebRequestModel } from './EditDataSourceConstantAlloyIdHeadersWebRequestModel';

export type EditDataSourceConstantAlloyIdWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The Alloy id used as the value for this data source
     */
    valueAlloyId?: string | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantAlloyIdHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantAlloyIdWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantAlloyIdWebRequestModel';
}
