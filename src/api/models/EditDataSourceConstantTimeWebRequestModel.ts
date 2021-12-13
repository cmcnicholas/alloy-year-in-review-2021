/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceConstantTimeWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The time used as the value for this data source
     */
    valueTime?: string | null;
  };

export namespace EditDataSourceConstantTimeWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantTimeWebRequestModel';
}
