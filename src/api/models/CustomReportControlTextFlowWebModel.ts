/* eslint-disable */

import type { CustomReportControlFlowWebModelBase } from './CustomReportControlFlowWebModelBase';
import type { CustomReportControlPropertyWebModelOfNullableBoolean } from './CustomReportControlPropertyWebModelOfNullableBoolean';
import type { CustomReportControlPropertyWebModelOfNullableCustomReportTextAlignWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportTextAlignWebModel';
import type { CustomReportControlPropertyWebModelOfNullableCustomReportTextStyleWebModel } from './CustomReportControlPropertyWebModelOfNullableCustomReportTextStyleWebModel';
import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

export type CustomReportControlTextFlowWebModel = CustomReportControlFlowWebModelBase & {
  /**
   * The text to use for the label
   */
  text?: CustomReportControlPropertyWebModelOfString | null;
  /**
   * Optional style of the text, defaults to normal
   */
  style?: CustomReportControlPropertyWebModelOfNullableCustomReportTextStyleWebModel | null;
  /**
   * Optional alignment of the text, defaults to left
   */
  align?: CustomReportControlPropertyWebModelOfNullableCustomReportTextAlignWebModel | null;
  /**
   * Optional wrapping setting of the text, defaults to false
   */
  noWrap?: CustomReportControlPropertyWebModelOfNullableBoolean | null;
};

export namespace CustomReportControlTextFlowWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTextFlowWebModel';
}
