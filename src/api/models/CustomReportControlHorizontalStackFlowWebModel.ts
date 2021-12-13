/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfNullableBoolean } from './CustomReportControlPropertyWebModelOfNullableBoolean';
import type { CustomReportControlPropertyWebModelOfNullableHorizontalStackAlign } from './CustomReportControlPropertyWebModelOfNullableHorizontalStackAlign';
import type { CustomReportControlWithControlsWebModel } from './CustomReportControlWithControlsWebModel';

export type CustomReportControlHorizontalStackFlowWebModel =
  CustomReportControlWithControlsWebModel & {
    /**
     * Optional alignment for the horizontal stack, will default to left aligned
     */
    align?: CustomReportControlPropertyWebModelOfNullableHorizontalStackAlign | null;
    /**
     * Optional property to allow wrapping, by default content will not wrap and be forced onto the same line
     */
    wrap?: CustomReportControlPropertyWebModelOfNullableBoolean | null;
  };

export namespace CustomReportControlHorizontalStackFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlHorizontalStackFlowWebModel';
}
