/* eslint-disable */

import type { ItemChangeCauseWebModelBase } from './ItemChangeCauseWebModelBase';

export type ItemChangeCauseEngineScriptWebModel = ItemChangeCauseWebModelBase & {
  /**
   * The code of the auto increment attribute that this item change was caused for
   */
  engineScriptCode: string;
};

export namespace ItemChangeCauseEngineScriptWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemChangeCauseEngineScriptWebModel';
}
