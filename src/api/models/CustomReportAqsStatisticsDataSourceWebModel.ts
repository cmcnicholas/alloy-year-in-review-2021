/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportAqsStatisticsDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The default value to use for reports if no run time value is specified
     */
    aqs?: AqsJsonNode | null;
  };

export namespace CustomReportAqsStatisticsDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportAqsStatisticsDataSourceWebModel';
}
