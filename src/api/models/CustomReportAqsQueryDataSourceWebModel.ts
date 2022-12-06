/* eslint-disable */

import type { AqsJsonNodeWebModel } from './AqsJsonNodeWebModel';
import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';

export type CustomReportAqsQueryDataSourceWebModel = CustomReportAttributeDataSourceWebModelBase & {
  /**
   * The default value to use for reports if no run time value is specified
   */
  aqs?: AqsJsonNodeWebModel | null;
  /**
   * The DoDI code for the AQS query
   */
  dodiCode: string;
  /**
   * Attributes for the AQS query
   */
  attributes?: Array<string> | null;
  /**
   * JoinAttributes for the AQS query
   */
  joinAttributes?: Array<string> | null;
};

export namespace CustomReportAqsQueryDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportAqsQueryDataSourceWebModel';
}
