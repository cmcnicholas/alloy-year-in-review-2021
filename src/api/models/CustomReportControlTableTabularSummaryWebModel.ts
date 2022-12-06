/* eslint-disable */

import type { CustomReportControlTableTabularSummaryPositionWebModel } from './CustomReportControlTableTabularSummaryPositionWebModel';
import type { CustomReportControlTableTabularSummaryRowDefinitionWebModel } from './CustomReportControlTableTabularSummaryRowDefinitionWebModel';

/**
 * Supplements a table control with summary information regarding its headers
 */
export type CustomReportControlTableTabularSummaryWebModel = {
  /**
   * Determines where to position the extra summary rows that will be added
   */
  position?: CustomReportControlTableTabularSummaryPositionWebModel;
  /**
   * Whether the table should only render the summary information and not display the actual data being held by
   * it
   */
  onlySummary?: boolean;
  /**
   * Each row holding all the cells that need to be outputted with summary data
   */
  rowDefinitions: Array<CustomReportControlTableTabularSummaryRowDefinitionWebModel>;
};

export namespace CustomReportControlTableTabularSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableTabularSummaryWebModel';
}
