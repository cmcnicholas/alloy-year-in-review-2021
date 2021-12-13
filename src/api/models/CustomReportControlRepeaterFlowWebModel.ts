/* eslint-disable */

import type { CustomReportControlWithControlsWebModel } from './CustomReportControlWithControlsWebModel';

export type CustomReportControlRepeaterFlowWebModel = CustomReportControlWithControlsWebModel & {
  /**
   * This the header to repeat on. Rows will be grouped based on the value of this column and the repeater will
   * iterate over these groups
   */
  headerToRepeatOn?: string | null;
};

export namespace CustomReportControlRepeaterFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlRepeaterFlowWebModel';
}
