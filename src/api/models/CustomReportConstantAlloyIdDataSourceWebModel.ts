/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportConstantAlloyIdDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The Alloy id used as the value for this data source
     */
    valueAlloyId?: string | null;
  };

export namespace CustomReportConstantAlloyIdDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantAlloyIdDataSourceWebModel';
}
