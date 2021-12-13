/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantStringDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The text used as the value for this data source
     */
    valueText?: string | null;
  };

export namespace CustomReportConstantStringDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantStringDataSourceWebModel';
}
