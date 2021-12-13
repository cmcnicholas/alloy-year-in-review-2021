/* eslint-disable */

import type { ItemChangeCauseWebModelBase } from './ItemChangeCauseWebModelBase';

export type ItemChangeCauseImportWebModel = ItemChangeCauseWebModelBase & {
  /**
   * The id of the workflow run that caused this change
   */
  importCode: string;
};

export namespace ItemChangeCauseImportWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemChangeCauseImportWebModel';
}
