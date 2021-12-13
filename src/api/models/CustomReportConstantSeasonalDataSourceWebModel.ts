/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantSeasonalDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The seasonal used as the value for this data source
     */
    valueSeasonal?: string | null;
  };

export namespace CustomReportConstantSeasonalDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantSeasonalDataSourceWebModel';
}
