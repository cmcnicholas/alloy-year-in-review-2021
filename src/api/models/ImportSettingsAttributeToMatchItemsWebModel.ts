/* eslint-disable */

/**
 * Web model for import settings attribute used to match items by attribute value in Update or Upsert mode.
 */
export type ImportSettingsAttributeToMatchItemsWebModel = {
  /**
   * The header name on the import to map from
   */
  header: string;
  /**
   * The destination attribute item values are set for, it must exist on the design being imported into
   */
  code: string;
};

export namespace ImportSettingsAttributeToMatchItemsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSettingsAttributeToMatchItemsWebModel';
}
