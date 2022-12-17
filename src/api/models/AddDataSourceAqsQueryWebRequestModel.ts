/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';
import type { AqsJsonNodeWebModel } from './AqsJsonNodeWebModel';

export type AddDataSourceAqsQueryWebRequestModel = AddDataSourceAttributeWebRequestModelBase & {
  /**
   * The default value to use for reports if no run time value is specified
   */
  aqs?: AqsJsonNodeWebModel | null;
  /**
   * The Dodi code for the AQS query
   */
  dodiCode: string;
  /**
   * Attributes for the AQS query
   */
  attributes?: Array<string> | null;
  /**
   * JoinAttributes for the AQS query
   */
  joinAttributes?: Array<string> | null;
};

export namespace AddDataSourceAqsQueryWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceAqsQueryWebRequestModel';
}
