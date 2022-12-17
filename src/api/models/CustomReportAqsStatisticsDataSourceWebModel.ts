/* eslint-disable */

import type { AqsJsonNodeWebModel } from './AqsJsonNodeWebModel';
import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportAqsStatisticsDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The default value to use for reports if no run time value is specified
     */
    aqs?: AqsJsonNodeWebModel | null;
  };

export namespace CustomReportAqsStatisticsDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportAqsStatisticsDataSourceWebModel';
}
