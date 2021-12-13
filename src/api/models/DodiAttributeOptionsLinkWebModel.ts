/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

export type DodiAttributeOptionsLinkWebModel = DodiAttributeOptionsWebModelBase & {
  /**
   * The dodi Guc that this attribute can link to
   */
  code: string;
  /**
   * The graph type that this link belongs to
   */
  graph: string;
  /**
   * When an item is deleted, all its children connected through links which are NOT weak references,
   * will be deleted as well. Setting this parameter will currently have no effect and it is set internally
   */
  weakReference: boolean;
  /**
   * The maximum number of connections
   */
  max?: number | null;
  /**
   * The optional default value of this attribute
   */
  defaultValue?: Array<string> | null;
  /**
   * The optional collections codes, when set validation is run on linked items to check their collection satisfy the specified ones
   */
  collectionCodes?: Array<CollectionCode> | null;
};

export namespace DodiAttributeOptionsLinkWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOptionsLinkWebModel';
}
