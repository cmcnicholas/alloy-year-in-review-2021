/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantDateHeadersWebRequestModel } from './EditDataSourceConstantDateHeadersWebRequestModel';

export type EditDataSourceConstantDateWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The date used as the value for this data source
     */
    valueDate?: string | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantDateHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantDateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantDateWebRequestModel';
}
