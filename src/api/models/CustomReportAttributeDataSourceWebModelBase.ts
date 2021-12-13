/* eslint-disable */

import type { CustomReportDataSourceWebModelBase } from './CustomReportDataSourceWebModelBase';

export type CustomReportAttributeDataSourceWebModelBase = CustomReportDataSourceWebModelBase & {
  /**
   * Whether the data source is required at report generation time
   */
  required: boolean;
  /**
   * The tags belonging to this data source
   */
  tags?: Array<string> | null;
};

export namespace CustomReportAttributeDataSourceWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportAttributeDataSourceWebModelBase';
}
