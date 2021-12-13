/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantDateTimeDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The datetime used as the value for this data source
     */
    valueDateTime?: string | null;
  };

export namespace CustomReportConstantDateTimeDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantDateTimeDataSourceWebModel';
}
