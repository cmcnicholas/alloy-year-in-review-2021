/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceConstantDateTimeWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The datetime used as the value for this data source
     */
    valueDateTime?: string | null;
  };

export namespace EditDataSourceConstantDateTimeWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantDateTimeWebRequestModel';
}
