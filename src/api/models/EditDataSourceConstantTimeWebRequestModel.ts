/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantTimeHeadersWebRequestModel } from './EditDataSourceConstantTimeHeadersWebRequestModel';

export type EditDataSourceConstantTimeWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The time used as the value for this data source
     */
    valueTime?: string | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantTimeHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantTimeWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantTimeWebRequestModel';
}
