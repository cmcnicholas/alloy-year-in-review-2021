/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantNumberHeadersWebRequestModel } from './EditDataSourceConstantNumberHeadersWebRequestModel';

export type EditDataSourceConstantNumberWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The number used as the value for this data source
     */
    valueNumber?: number | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantNumberHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantNumberWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantNumberWebRequestModel';
}
