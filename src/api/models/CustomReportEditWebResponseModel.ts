/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Web model for a custom report
 */
export type CustomReportEditWebResponseModel = {
  /**
   * The retrieved custom report definition
   */
  customReport: CustomReportWebModel;
};

export namespace CustomReportEditWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportEditWebResponseModel';
}
