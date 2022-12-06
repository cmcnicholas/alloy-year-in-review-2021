/* eslint-disable */

import type { AqsItemTypeWebModel } from './AqsItemTypeWebModel';
import type { JObject } from './JObject';

/**
 * Represents a single node in an AQS
 */
export type AqsJsonNodeWebModel = {
  /**
   * The type defining this AQS node
   */
  type: AqsItemTypeWebModel;
  /**
   * The corresponding properties this AQS node holds
   */
  properties?: JObject | null;
  /**
   * The children of other AQS nodes this node can contain
   */
  children?: Array<AqsJsonNodeWebModel> | null;
};

export namespace AqsJsonNodeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsJsonNodeWebModel';
}
