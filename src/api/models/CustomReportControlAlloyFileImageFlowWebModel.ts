/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

export type CustomReportControlAlloyFileImageFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The file item id of the Alloy file representing the image
   */
  fileItemId?: CustomReportControlPropertyWebModelOfString | null;
};

export namespace CustomReportControlAlloyFileImageFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlAlloyFileImageFlowWebModel';
}
