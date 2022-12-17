/* eslint-disable */

import type { DesignInterfaceWithOperationsSummaryWebResponseModel } from './DesignInterfaceWithOperationsSummaryWebResponseModel';

/**
 * Web model for a design interface attribute creation
 */
export type DesignInterfaceAttributeCreateWebResponseModel = {
  /**
   * The created dodi attribute Guc
   */
  attributeCode: string;
  /**
   * The design interface model into which new attribute is added
   */
  designInterfaceWithOperationsSummary: DesignInterfaceWithOperationsSummaryWebResponseModel;
};

export namespace DesignInterfaceAttributeCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignInterfaceAttributeCreateWebResponseModel';
}
