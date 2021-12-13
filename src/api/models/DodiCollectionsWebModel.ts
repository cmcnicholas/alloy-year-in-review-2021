/* eslint-disable */

import type { CollectionCode } from './CollectionCode';

/**
 * Web model for dodi collections
 */
export type DodiCollectionsWebModel = {
  /**
   * The dodi collection codes
   */
  values: Array<CollectionCode>;
  /**
   * The parent dodi Guc, i.e. the dodi that defines collections
   */
  parent: string;
};

export namespace DodiCollectionsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiCollectionsWebModel';
}
