/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfNullableBoolean } from './CustomReportControlPropertyWebModelOfNullableBoolean';
import type { CustomReportControlPropertyWebModelOfNullableTextAlign } from './CustomReportControlPropertyWebModelOfNullableTextAlign';
import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

/**
 * Custom report control table header
 */
export type CustomReportControlTableHeaderFlowWebModel = {
  /**
   * The column to compute data for
   */
  column?: string | null;
  /**
   * The text definition for the header
   */
  text?: CustomReportControlPropertyWebModelOfString | null;
  /**
   * Optional alignment of the text, defaults to left
   */
  align?: CustomReportControlPropertyWebModelOfNullableTextAlign | null;
  /**
   * Whether the table header wraps or not
   */
  noWrap?: CustomReportControlPropertyWebModelOfNullableBoolean | null;
};

export namespace CustomReportControlTableHeaderFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableHeaderFlowWebModel';
}
