/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel';
import type { CustomReportControlPropertyWebModelOfNullableCustomReportRelativeWidthWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportRelativeWidthWebModel';

/**
 * Custom report control base
 */
export type CustomReportControlFlowWebModelBase = {
  /**
   * The margin top of the control in relation to its siblings
   */
  marginTop?: CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel | null;
  /**
   * The margin left of the control in relation to its siblings
   */
  marginLeft?: CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel | null;
  /**
   * The margin right of the control in relation to its siblings
   */
  marginRight?: CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel | null;
  /**
   * The margin bottom of the control in relation to its siblings
   */
  marginBottom?: CustomReportControlPropertyWebModelOfNullableCustomReportMarginWebModel | null;
  /**
   * The relative width of the control in relation to its parent, the default is Auto for most controls
   */
  relativeWidth?: CustomReportControlPropertyWebModelOfNullableCustomReportRelativeWidthWebModel | null;
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
