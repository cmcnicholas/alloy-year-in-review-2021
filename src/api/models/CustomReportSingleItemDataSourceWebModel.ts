/* eslint-disable */

import type { CollectionCodeWebModel } from './CollectionCodeWebModel';
import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';
import type { CustomReportLinkBehaviourWebModel } from './CustomReportLinkBehaviourWebModel';

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
    collectionCodes?: Array<CollectionCodeWebModel> | null;
    /**
     * The link behaviour of this single item data source (whether to link this report to the item in this data source).
     */
    linkBehaviour?: CustomReportLinkBehaviourWebModel;
  };

export namespace CustomReportSingleItemDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportSingleItemDataSourceWebModel';
}
