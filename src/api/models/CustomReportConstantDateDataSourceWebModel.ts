/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantDateDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The date used as the value for this data source
     */
    valueDate?: string | null;
  };

export namespace CustomReportConstantDateDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantDateDataSourceWebModel';
}
