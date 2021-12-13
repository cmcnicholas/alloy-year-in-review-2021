/* eslint-disable */

/**
 * Web model for import settings network references
 */
export type ImportSettingsNetworkReferenceWebModel = {
  /**
   * The header name on the import that contains the unique identifier of the network section
   */
  referenceHeader: string;
  /**
   * The header name on the import that contains the start chainage value
   */
  startChainageHeader?: string | null;
  /**
   * The header name on the import that contains the end chainage value
   */
  endChainageHeader?: string | null;
  /**
   * The design code of the network that contains sections to reference against, the design should be network referenceable
   */
  networkDesignCode: string;
  /**
   * The attribute code of the unique identifier for the network section, used to match referenceHeader on
   */
  networkReferenceAttributeCode: string;
};

export namespace ImportSettingsNetworkReferenceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSettingsNetworkReferenceWebModel';
}
