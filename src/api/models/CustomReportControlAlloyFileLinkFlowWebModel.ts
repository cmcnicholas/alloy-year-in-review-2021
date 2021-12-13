/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

export type CustomReportControlAlloyFileLinkFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The file item id of the Alloy file being linked
   */
  fileItemId?: CustomReportControlPropertyWebModelOfString | null;
};

export namespace CustomReportControlAlloyFileLinkFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlAlloyFileLinkFlowWebModel';
}
