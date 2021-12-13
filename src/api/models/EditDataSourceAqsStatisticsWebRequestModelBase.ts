/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';

export type EditDataSourceAqsStatisticsWebRequestModelBase =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The default value to use for reports if no run time value is specified
     */
    aqs?: AqsJsonNode | null;
  };

export namespace EditDataSourceAqsStatisticsWebRequestModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAqsStatisticsWebRequestModelBase';
}
