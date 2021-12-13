/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantTimeWebRequestModel = AddDataSourceAttributeWebRequestModelBase & {
  /**
   * The time used as the value for this data source
   */
  valueTime?: string | null;
};

export namespace AddDataSourceConstantTimeWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantTimeWebRequestModel';
}
