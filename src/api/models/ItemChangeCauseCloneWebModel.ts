/* eslint-disable */

import type { ItemChangeCauseWebModelBase } from './ItemChangeCauseWebModelBase';

export type ItemChangeCauseCloneWebModel = ItemChangeCauseWebModelBase & {
  /**
   * The id of the item that this item was cloned from
   */
  clonedFromId: string;
  /**
   * Any parent clones that caused the clone of this item in a template cascade
   */
  templateCascadeParents: Array<string>;
};

export namespace ItemChangeCauseCloneWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemChangeCauseCloneWebModel';
}
