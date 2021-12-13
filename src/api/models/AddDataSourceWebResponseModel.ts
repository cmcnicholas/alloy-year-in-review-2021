/* eslint-disable */

import type { CustomReportDataSourceWebModelBase } from './CustomReportDataSourceWebModelBase';
import type { CustomReportWebModel } from './CustomReportWebModel';

/**
 * Add data source web response model
 */
export type AddDataSourceWebResponseModel = {
  /**
   * The custom report
   */
  customReport: CustomReportWebModel;
  /**
   * The data source that has been added
   */
  addedDataSource: CustomReportDataSourceWebModelBase;
};

export namespace AddDataSourceWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceWebResponseModel';
}
