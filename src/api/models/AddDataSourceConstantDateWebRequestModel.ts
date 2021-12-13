/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';

export type AddDataSourceConstantDateWebRequestModel = AddDataSourceAttributeWebRequestModelBase & {
  /**
   * The date used as the value for this data source
   */
  valueDate?: string | null;
};

export namespace AddDataSourceConstantDateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantDateWebRequestModel';
}
