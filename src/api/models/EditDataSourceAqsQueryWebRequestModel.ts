/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { EditDataSourceAqsQueryHeaderSettingsWebRequestModel } from './EditDataSourceAqsQueryHeaderSettingsWebRequestModel';
import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceAqsQueryWebRequestModel = EditDataSourceAttributeWebRequestModelBase & {
  /**
   * The default value to use for reports if no run time value is specified
   */
  aqs?: AqsJsonNode | null;
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
   * Header settings for the data source.
   */
  headerSettings?: Array<EditDataSourceAqsQueryHeaderSettingsWebRequestModel> | null;
};

export namespace EditDataSourceAqsQueryWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAqsQueryWebRequestModel';
}
