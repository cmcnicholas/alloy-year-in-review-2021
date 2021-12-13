/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Web model for a custom report
 */
export type CustomReportCreateWebResponseModel = {
  /**
   * The created custom report definition
   */
  customReport: CustomReportWebModel;
};

export namespace CustomReportCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportCreateWebResponseModel';
}
