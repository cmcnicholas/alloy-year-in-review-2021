/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Remove data source web response model
 */
export type RemoveDataSourceWebResponseModel = {
  /**
   * The custom report
   */
  customReport: CustomReportWebModel;
};

export namespace RemoveDataSourceWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'RemoveDataSourceWebResponseModel';
}
