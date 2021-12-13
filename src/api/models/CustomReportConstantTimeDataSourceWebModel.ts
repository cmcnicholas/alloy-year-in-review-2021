/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantTimeDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The time used as the value for this data source
     */
    valueTime?: string | null;
  };

export namespace CustomReportConstantTimeDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantTimeDataSourceWebModel';
}
