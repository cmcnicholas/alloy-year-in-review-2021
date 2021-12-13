/* eslint-disable */

import type { CustomReportAggregationType } from './CustomReportAggregationType';

/**
 * Allows to define header settings as part of an AQS query data source.
 */
export type EditDataSourceAqsQueryHeaderSettingsWebRequestModel = {
  /**
   * The header Id we want to apply extra settings to.
   */
  headerId: string;
  /**
   * How to aggregate the header data table values.
   */
  aggregationType: CustomReportAggregationType;
};

export namespace EditDataSourceAqsQueryHeaderSettingsWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAqsQueryHeaderSettingsWebRequestModel';
}
