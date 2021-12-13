/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { LinkBehaviour } from './LinkBehaviour';

export type EditDataSourceSingleItemWebRequestModel = EditDataSourceAttributeWebRequestModelBase & {
  /**
   * The default value to use for reports if no run time value is specified
   */
  itemId?: string | null;
  /**
   * The linking behaviour for the single item to generated reports
   */
  linkBehaviour: LinkBehaviour;
  /**
   * The optional list of collections the item can belong to
   */
  collectionCodes?: Array<CollectionCode> | null;
};

export namespace EditDataSourceSingleItemWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceSingleItemWebRequestModel';
}
