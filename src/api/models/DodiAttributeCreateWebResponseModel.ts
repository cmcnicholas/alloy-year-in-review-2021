/* eslint-disable */

import type { DesignWithOperationsSummaryWebResponseModel } from './DesignWithOperationsSummaryWebResponseModel';

/**
 * Web model for a dodi attribute
 */
export type DodiAttributeCreateWebResponseModel = {
  /**
   * The created dodi attribute Guc
   */
  attributeCode: string;
  /**
   * The design model into which new attribute is added
   */
  designWithOperationsSummary: DesignWithOperationsSummaryWebResponseModel;
};

export namespace DodiAttributeCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeCreateWebResponseModel';
}
