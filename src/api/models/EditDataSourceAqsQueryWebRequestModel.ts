/* eslint-disable */

import type { AqsJsonNodeWebModel } from './AqsJsonNodeWebModel';
import type { EditDataSourceAqsQueryHeadersWebRequestModel } from './EditDataSourceAqsQueryHeadersWebRequestModel';
import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceAqsQueryWebRequestModel = EditDataSourceAttributeWebRequestModelBase & {
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
  /**
   * Updates the headers on this data source
   */
  headers?: Array<EditDataSourceAqsQueryHeadersWebRequestModel> | null;
};

export namespace EditDataSourceAqsQueryWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAqsQueryWebRequestModel';
}
