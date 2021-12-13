/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';
import type { LinkBehaviour } from './LinkBehaviour';

export type CustomReportSingleItemDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The code of the dodi this data source points to
     */
    dodiCode: string;
    /**
     * The default value to use for reports if no run time value is specified
     */
    itemId?: string | null;
    /**
     * The optional list of collections the item can belong to
     */
    collectionCodes?: Array<CollectionCode> | null;
    /**
     * The link behaviour of this single item data source (whether to link this report to the item in this data source).
     */
    linkBehaviour?: LinkBehaviour;
  };

export namespace CustomReportSingleItemDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportSingleItemDataSourceWebModel';
}
