/* eslint-disable */

import type { CustomReportControlTableFlowSummaryPositionWebModel } from './CustomReportControlTableFlowSummaryPositionWebModel';
import type { CustomReportControlTableFlowSummaryRowDefinitionWebModel } from './CustomReportControlTableFlowSummaryRowDefinitionWebModel';

/**
 * Supplements a table control with summary information regarding its headers
 */
export type CustomReportControlTableFlowSummaryWebModel = {
  /**
   * Determines where to position the extra summary rows that will be added
   */
  position?: CustomReportControlTableFlowSummaryPositionWebModel;
  /**
   * Whether the table should only render the summary information and not display the actual data being held by
   * it
   */
  onlySummary?: boolean;
  /**
   * Each row holding all the cells that need to be outputted with summary data
   */
  rowDefinitions: Array<CustomReportControlTableFlowSummaryRowDefinitionWebModel>;
};

export namespace CustomReportControlTableFlowSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableFlowSummaryWebModel';
}
