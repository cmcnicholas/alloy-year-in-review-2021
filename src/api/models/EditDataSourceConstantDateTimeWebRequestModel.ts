/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantDateTimeHeadersWebRequestModel } from './EditDataSourceConstantDateTimeHeadersWebRequestModel';

export type EditDataSourceConstantDateTimeWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The datetime used as the value for this data source
     */
    valueDateTime?: string | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantDateTimeHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantDateTimeWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantDateTimeWebRequestModel';
}
