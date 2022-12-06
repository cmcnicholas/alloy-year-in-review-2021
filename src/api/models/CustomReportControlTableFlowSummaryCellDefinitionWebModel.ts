/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

/**
 * A cell holding information on how to resolve the value with summary data
 */
export type CustomReportControlTableFlowSummaryCellDefinitionWebModel = {
  /**
   * The identifier of the column we want to apply the control property to
   */
  columnId: string;
  /**
   * The property that represents how/what this cell should render in the table
   */
  property?: CustomReportControlPropertyWebModelOfString | null;
};

export namespace CustomReportControlTableFlowSummaryCellDefinitionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableFlowSummaryCellDefinitionWebModel';
}
