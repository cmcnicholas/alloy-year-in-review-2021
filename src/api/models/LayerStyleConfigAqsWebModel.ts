/* eslint-disable */

import type { AqsJsonNode } from './AqsJsonNode';
import type { LayerStyleConfigWebModelBase } from './LayerStyleConfigWebModelBase';

export type LayerStyleConfigAqsWebModel = LayerStyleConfigWebModelBase & {
  /**
   * The aqs node containing the query for this layer style
   */
  aqsNode: AqsJsonNode;
};

export namespace LayerStyleConfigAqsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerStyleConfigAqsWebModel';
}
