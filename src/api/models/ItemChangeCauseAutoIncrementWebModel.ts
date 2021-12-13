/* eslint-disable */

import type { ItemChangeCauseWebModelBase } from './ItemChangeCauseWebModelBase';

export type ItemChangeCauseAutoIncrementWebModel = ItemChangeCauseWebModelBase & {
  /**
   * The code of the auto increment attribute that this item change was caused for
   */
  attributeCode: string;
};

export namespace ItemChangeCauseAutoIncrementWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemChangeCauseAutoIncrementWebModel';
}
