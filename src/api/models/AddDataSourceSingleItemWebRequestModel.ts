/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';
import type { CollectionCodeWebModel } from './CollectionCodeWebModel';
import type { CustomReportLinkBehaviourWebModel } from './CustomReportLinkBehaviourWebModel';

export type AddDataSourceSingleItemWebRequestModel = AddDataSourceAttributeWebRequestModelBase & {
  /**
   * The code of the dodi this data source points to
   */
  dodiCode: string;
  /**
   * The default value to use for reports if no run time value is specified
   */
  itemId?: string | null;
  /**
   * The linking behaviour for the single item to generated reports
   */
  linkBehaviour: CustomReportLinkBehaviourWebModel;
  /**
   * The optional list of collections the item can belong to
   */
  collectionCodes?: Array<CollectionCodeWebModel> | null;
};

export namespace AddDataSourceSingleItemWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceSingleItemWebRequestModel';
}
