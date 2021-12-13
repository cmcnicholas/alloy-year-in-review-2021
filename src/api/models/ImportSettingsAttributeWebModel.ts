/* eslint-disable */

/**
 * Web model for import settings attributes
 */
export type ImportSettingsAttributeWebModel = {
  /**
   * The header name on the import to map from
   */
  header: string;
  /**
   * The destination attribute to import to, it must exist on the design being imported into
   */
  code: string;
  /**
   * If the attribute is of type Link then this value indicates the matching attribute code
   * on the destination design to look for matches against the import rows value.
   * If a match is found a link will be made
   */
  matchCode?: string | null;
  /**
   * Optional flag for Link attributes, represents link attribute to an item AId.
   * Note this flag is mutually exclusive with MatchCode string.
   */
  matchByItemId?: boolean | null;
  /**
   * Optional flag for Link attributes, used during import update or upsert modes. If not set, defaults to false.
   *
   * If true this means we'll be patching the link attribute to make sure it includes the given child item(s)
   * (any existing child items in the link not covered by the patch will remain).
   *
   * If false this means we'll be setting the link attribute to the given child item(s)
   * (any existing child items in the link not covered by the patch will be removed).
   */
  patchLink?: boolean | null;
  /**
   * This value indicates the projection of the geometry attribute, must be a valid proj4 string
   */
  proj4?: string | null;
};

export namespace ImportSettingsAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSettingsAttributeWebModel';
}
