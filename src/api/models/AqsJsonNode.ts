/* eslint-disable */

import type { AqsItemType } from './AqsItemType';
import type { JObject } from './JObject';

export type AqsJsonNode = {
  type: AqsItemType;
  properties?: JObject | null;
  children?: Array<AqsJsonNode> | null;
};

export namespace AqsJsonNode {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsJsonNode';
}
