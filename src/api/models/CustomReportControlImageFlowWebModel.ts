/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

export type CustomReportControlImageFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The url of the image
   */
  url?: CustomReportControlPropertyWebModelOfString | null;
};

export namespace CustomReportControlImageFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlImageFlowWebModel';
}
