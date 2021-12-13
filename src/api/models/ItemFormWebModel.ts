/* eslint-disable */

import type { Context } from './Context';
import type { ItemFormAction } from './ItemFormAction';
import type { ItemFormControlWebModel } from './ItemFormControlWebModel';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for an item form
 */
export type ItemFormWebModel = {
  /**
   * The item form name
   */
  name: string;
  /**
   * The unique item form code
   */
  code: string;
  /**
   * The item form Context
   */
  context: Context;
  /**
   * The dodi code this item form is created against
   */
  dodiCode: string;
  /**
   * The controls of this item form
   */
  controls: Array<ItemFormControlWebModel>;
  /**
   * The tags associated to this item form
   */
  tags: Array<string>;
  /**
   * The item form actions, tells user if this form should be used when creating items, editing/deleting them or both
   */
  actions: Array<ItemFormAction>;
  /**
   * The metadata to an item form
   */
  metadata: MetadataWebModel;
};

export namespace ItemFormWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormWebModel';
}
