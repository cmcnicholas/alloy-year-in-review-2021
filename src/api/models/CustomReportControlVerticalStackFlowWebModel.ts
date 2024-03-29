/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfNullableCustomReportVerticalStackAlignWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportVerticalStackAlignWebModel';
import type { CustomReportControlWithControlsWebModel } from './CustomReportControlWithControlsWebModel';

export type CustomReportControlVerticalStackFlowWebModel =
  CustomReportControlWithControlsWebModel & {
    /**
     * Optional alignment for the vertical stack, will default to left aligned
     */
    align?: CustomReportControlPropertyWebModelOfNullableCustomReportVerticalStackAlignWebModel | null;
  };

export namespace CustomReportControlVerticalStackFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlVerticalStackFlowWebModel';
}
