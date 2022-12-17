/* eslint-disable */

import type { DesignWithOperationsSummaryWebResponseModel } from './DesignWithOperationsSummaryWebResponseModel';

/**
 * Web model for a design attribute creation
 */
export type DesignAttributeCreateWebResponseModel = {
  /**
   * The created dodi attribute Guc
   */
  attributeCode: string;
  /**
   * The design model into which new attribute is added
   */
  designWithOperationsSummary: DesignWithOperationsSummaryWebResponseModel;
};

export namespace DesignAttributeCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignAttributeCreateWebResponseModel';
}
