/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantBooleanDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The boolean used as the value for this data source
     */
    valueBoolean?: boolean | null;
  };

export namespace CustomReportConstantBooleanDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantBooleanDataSourceWebModel';
}
