/* eslint-disable */

import type { JToken } from './JToken';

/**
 * Web model for an item attribute
 */
export type ItemAttributeWebModel = {
  /**
   * The dodi attribute Guc
   */
  attributeCode: string;
  /**
   * The dodi attribute value
   */
  value?: JToken | null;
};

export namespace ItemAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemAttributeWebModel';
}
