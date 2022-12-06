/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantStringHeadersWebRequestModel } from './EditDataSourceConstantStringHeadersWebRequestModel';

export type EditDataSourceConstantStringWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The text used as the value for this data source
     */
    valueText?: string | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantStringHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantStringWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantStringWebRequestModel';
}
