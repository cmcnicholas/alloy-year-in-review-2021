/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfNullableBoolean } from './CustomReportControlPropertyWebModelOfNullableBoolean';
import type { CustomReportControlPropertyWebModelOfNullableHeaderType } from './CustomReportControlPropertyWebModelOfNullableHeaderType';
import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

export type CustomReportControlFieldFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * Optional override for the label, otherwise will assume attribute name
   */
  label?: CustomReportControlPropertyWebModelOfString | null;
  /**
   * Value of the field
   */
  value?: CustomReportControlPropertyWebModelOfString | null;
  /**
   * Optional property to enforce no wrapping ie. a single line rather than multiline (if content is large)
   */
  noWrap?: CustomReportControlPropertyWebModelOfNullableBoolean | null;
  /**
   * The type of header to use for default data source column names
   */
  headerType?: CustomReportControlPropertyWebModelOfNullableHeaderType | null;
};

export namespace CustomReportControlFieldFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlFieldFlowWebModel';
}
