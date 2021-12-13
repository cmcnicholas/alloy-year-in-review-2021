/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantNumberDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The number used as the value for this data source
     */
    valueNumber?: number | null;
  };

export namespace CustomReportConstantNumberDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantNumberDataSourceWebModel';
}
