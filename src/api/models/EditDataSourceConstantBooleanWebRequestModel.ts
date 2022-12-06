/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantBooleanHeadersWebRequestModel } from './EditDataSourceConstantBooleanHeadersWebRequestModel';

export type EditDataSourceConstantBooleanWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The boolean used as the value for this data source
     */
    valueBoolean?: boolean | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantBooleanHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantBooleanWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantBooleanWebRequestModel';
}
