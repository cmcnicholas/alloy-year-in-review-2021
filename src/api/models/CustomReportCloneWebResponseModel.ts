/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Web response model when cloning a custom report.
 */
export type CustomReportCloneWebResponseModel = {
  /**
   * The cloned custom report definition.
   */
  customReport: CustomReportWebModel;
};

export namespace CustomReportCloneWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportCloneWebResponseModel';
}
