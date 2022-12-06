/* eslint-disable */

import type { CustomReportAggregationTypeWebModel } from './CustomReportAggregationTypeWebModel';
import type { EditDataSourceHeadersWebRequestModelBase } from './EditDataSourceHeadersWebRequestModelBase';

export type EditDataSourceAqsQueryHeadersWebRequestModel =
  EditDataSourceHeadersWebRequestModelBase & {
    /**
     * How to aggregate the header data table values
     */
    aggregationType?: CustomReportAggregationTypeWebModel | null;
  };

export namespace EditDataSourceAqsQueryHeadersWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAqsQueryHeadersWebRequestModel';
}
