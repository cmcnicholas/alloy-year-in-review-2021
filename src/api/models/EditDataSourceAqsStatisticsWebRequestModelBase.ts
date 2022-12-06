/* eslint-disable */

import type { AqsJsonNodeWebModel } from './AqsJsonNodeWebModel';
import type { EditDataSourceAqsStatisticsHeadersWebRequestModel } from './EditDataSourceAqsStatisticsHeadersWebRequestModel';
import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceAqsStatisticsWebRequestModelBase =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The default value to use for reports if no run time value is specified
     */
    aqs?: AqsJsonNodeWebModel | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceAqsStatisticsHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceAqsStatisticsWebRequestModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAqsStatisticsWebRequestModelBase';
}
