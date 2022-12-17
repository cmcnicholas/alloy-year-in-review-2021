/* eslint-disable */

import type { CollectionCodeWebModel } from './CollectionCodeWebModel';
import type { CustomReportLinkBehaviourWebModel } from './CustomReportLinkBehaviourWebModel';
import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceSingleItemHeadersWebRequestModel } from './EditDataSourceSingleItemHeadersWebRequestModel';

export type EditDataSourceSingleItemWebRequestModel = EditDataSourceAttributeWebRequestModelBase & {
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
  /**
   * Updates the headers on this data source
   */
  headers?: Array<EditDataSourceSingleItemHeadersWebRequestModel> | null;
};

export namespace EditDataSourceSingleItemWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceSingleItemWebRequestModel';
}
