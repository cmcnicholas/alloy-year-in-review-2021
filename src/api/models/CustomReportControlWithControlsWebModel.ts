/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';

export type CustomReportControlWithControlsWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The list of controls nested inside this control. The order in the array is the order in which they
   * appear in the report
   */
  controls: Array<CustomReportControlFlowWebModelBase>;
  /**
   * This is the data source that can be passed over to children controls
   */
  dataSource?: string | null;
};

export namespace CustomReportControlWithControlsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlWithControlsWebModel';
}
