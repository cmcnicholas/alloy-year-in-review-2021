/* eslint-disable */

import type { CustomReportControlPropertyWebModelOfString } from './CustomReportControlPropertyWebModelOfString';

/**
 * Custom report control table header
 */
export type CustomReportControlTableHeaderTabularWebModel = {
  /**
   * The column to compute data for
   */
  column?: string | null;
  /**
   * The text definition for the header
   */
  text?: CustomReportControlPropertyWebModelOfString | null;
};

export namespace CustomReportControlTableHeaderTabularWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportControlTableHeaderTabularWebModel';
}
