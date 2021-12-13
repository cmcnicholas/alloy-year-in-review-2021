/* eslint-disable */

import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Edit data source web response model
 */
export type EditDataSourceWebResponseModel = {
  /**
   * The custom report
   */
  customReport: CustomReportWebModel;
};

export namespace EditDataSourceWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceWebResponseModel';
}
