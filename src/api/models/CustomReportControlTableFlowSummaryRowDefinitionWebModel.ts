/* eslint-disable */

import type { CustomReportControlTableFlowSummaryCellDefinitionWebModel } from './CustomReportControlTableFlowSummaryCellDefinitionWebModel';

/**
 * A row of summary information to be displayed in a table flow control
 */
export type CustomReportControlTableFlowSummaryRowDefinitionWebModel = {
  /**
   * A list holding all the cells that hold the summary data for each header
   */
  cellDefinitions?: Array<CustomReportControlTableFlowSummaryCellDefinitionWebModel> | null;
};

export namespace CustomReportControlTableFlowSummaryRowDefinitionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableFlowSummaryRowDefinitionWebModel';
}
