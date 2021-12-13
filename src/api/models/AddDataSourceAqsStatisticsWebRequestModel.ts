/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';
import type { AqsJsonNode } from './AqsJsonNode';

export type AddDataSourceAqsStatisticsWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The default value to use for reports if no run time value is specified
     */
    aqs?: AqsJsonNode | null;
  };

export namespace AddDataSourceAqsStatisticsWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceAqsStatisticsWebRequestModel';
}
