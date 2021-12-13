/* eslint-disable */

import type { ItemChangeCauseWebModelBase } from './ItemChangeCauseWebModelBase';
import type { ItemChangeType } from './ItemChangeType';

/**
 * Web response model for an item log
 */
export type ItemLogWebModel = {
  /**
   * The item AId that this log relates to
   */
  itemId: string;
  /**
   * The code of the design this item belongs to
   */
  designCode: string;
  /**
   * The action audited by this log entry
   */
  action: ItemChangeType;
  /**
   * If present, it highlights any special cause of this item log
   */
  causes: Array<ItemChangeCauseWebModelBase>;
  /**
   * The date time at which the action happened
   */
  date: string;
  /**
   * The username of the user executing the action
   */
  username?: string | null;
  /**
   * Notes that go with the operation
   */
  note?: string | null;
};

export namespace ItemLogWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemLogWebModel';
}
