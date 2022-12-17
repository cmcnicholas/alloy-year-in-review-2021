/* eslint-disable */

import type { CustomReportSummaryTypeWebModel } from './CustomReportSummaryTypeWebModel';

/**
 * Web model for the custom report control dynamically defined properties
 */
export type CustomReportControlPropertyFromDataSourceWebModel = {
  /**
   * The data source code the property should evaluate against
   */
  dataSourceCode: string;
  /**
   * The header name in the datasource the property should evaluate against
   */
  header: string;
  /**
   * The summary type that can be optionally applied to resulting value
   */
  summaryType?: CustomReportSummaryTypeWebModel;
};

export namespace CustomReportControlPropertyFromDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlPropertyFromDataSourceWebModel';
}
