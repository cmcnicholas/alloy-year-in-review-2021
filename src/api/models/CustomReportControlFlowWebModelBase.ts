/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfNullableMargin } from './CustomReportControlPropertyWebModelOfNullableMargin';
import type { CustomReportControlPropertyWebModelOfNullableRelativeWidth } from './CustomReportControlPropertyWebModelOfNullableRelativeWidth';

/**
 * Custom report control base
 */
export type CustomReportControlFlowWebModelBase = {
  /**
   * The margin top of the control in relation to its siblings
   */
  marginTop?: CustomReportControlPropertyWebModelOfNullableMargin | null;
  /**
   * The margin left of the control in relation to its siblings
   */
  marginLeft?: CustomReportControlPropertyWebModelOfNullableMargin | null;
  /**
   * The margin right of the control in relation to its siblings
   */
  marginRight?: CustomReportControlPropertyWebModelOfNullableMargin | null;
  /**
   * The margin bottom of the control in relation to its siblings
   */
  marginBottom?: CustomReportControlPropertyWebModelOfNullableMargin | null;
  /**
   * The relative width of the control in relation to its parent, the default is Auto for most controls
   */
  relativeWidth?: CustomReportControlPropertyWebModelOfNullableRelativeWidth | null;
  /**
   * Description or notes relating to the control for use with the Reports Builder
   */
  description?: string | null;
  discriminator: string;
};

export namespace CustomReportControlFlowWebModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlFlowWebModelBase';
}
