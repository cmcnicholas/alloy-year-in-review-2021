/* eslint-disable */

import type { CustomReportControlTableTabularSummaryCellDefinitionWebModel } from './CustomReportControlTableTabularSummaryCellDefinitionWebModel';

/**
 * A row of summary information to be displayed in a table tabular control
 */
export type CustomReportControlTableTabularSummaryRowDefinitionWebModel = {
  /**
   * A list holding all the cells that hold the summary data for each header
   */
  cellDefinitions?: Array<CustomReportControlTableTabularSummaryCellDefinitionWebModel> | null;
};

export namespace CustomReportControlTableTabularSummaryRowDefinitionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableTabularSummaryRowDefinitionWebModel';
}
