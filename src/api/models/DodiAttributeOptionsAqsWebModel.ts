/* eslint-disable */

import type { AqsItemType } from './AqsItemType';
import type { AqsJsonNode } from './AqsJsonNode';
import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsAqsWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * aqs types for the dodi. Could e Query, Join or StatisticsAggregation
   */
  aqsTypes?: Array<AqsItemType> | null;
  /**
   * The optional default value of this attribute
   */
  defaultValue?: AqsJsonNode | null;
  /**
   * The Dodi code for the AQS query
   */
  dodiCode?: string | null;
  /**
   * Attributes for the AQS query
   */
  attributes?: Array<string> | null;
  /**
   * JoinAttributes for the AQS query
   */
  joinAttributes?: Array<string> | null;
};

export namespace DodiAttributeOptionsAqsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsAqsWebModel';
}
