/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { Context } from './Context';
import type { ItemAttributeWebModel } from './ItemAttributeWebModel';

/**
 * Web model for an item
 */
export type ItemWebModel = {
  /**
   * The item AId
   */
  itemId: string;
  /**
   * The Guc of the design this item belongs to
   */
  designCode: string;
  /**
   * The Collection to which this item belongs to
   */
  collection: CollectionCode;
  /**
   * The item start date which is the date at which this item
   * started being in effect
   */
  start: string;
  /**
   * The item end date which is the date at which this item
   * stopped being in effect
   */
  end: string;
  /**
   * The item icon code, if specified, otherwise the design icon has to be used instead
   */
  icon: string;
  /**
   * The item colour, if specified, otherwise the design colour has to be used instead
   */
  colour: string;
  /**
   * Whether the item is locked for edit or not
   */
  locked: boolean;
  /**
   * Item context, standard items are Core/Module context and non editable
   */
  context: Context;
  /**
   * The item attributes belonging to this item
   */
  attributes: Array<ItemAttributeWebModel>;
  /**
   * The signature to send for every edit/delete operation related to this item
   */
  signature: string;
};

export namespace ItemWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemWebModel';
}
