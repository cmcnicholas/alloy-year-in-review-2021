/* eslint-disable */

import type { ImportSettingsAttributeToMatchItemsWebModel } from './ImportSettingsAttributeToMatchItemsWebModel';
import type { ImportSettingsBaseWebModel } from './ImportSettingsBaseWebModel';
import type { ImportSettingsGeometryWebModel } from './ImportSettingsGeometryWebModel';
import type { ImportSettingsNetworkReferenceWebModel } from './ImportSettingsNetworkReferenceWebModel';
import type { ImportSettingsParentWebModel } from './ImportSettingsParentWebModel';

export type ImportSettingsDataWebModel = ImportSettingsBaseWebModel & {
  /**
   * Optional geometry setting for imported items, if null we assume that imported have no geometry
   */
  geometry?: ImportSettingsGeometryWebModel | null;
  /**
   * The network reference settings defining how to create new network references when importing items.
   * If empty we assume that imported items have no network references.
   */
  networkReferences: Array<ImportSettingsNetworkReferenceWebModel>;
  /**
   * The parent settings defining how to link imported items to parents when importing.
   * If empty we assume that imported items have no parent links.
   */
  parents: Array<ImportSettingsParentWebModel>;
  /**
   * Optional item id header, allows user to import items with specific item id.
   * Note this property is mutually exclusive with AttributeToMatchItems.
   */
  itemIdHeader?: string | null;
  /**
   * Optional attribute to match items by attribute value, rather than by item id (via ItemIdHeader) on
   * Update or Upsert. Note this property is mutually exclusive with ItemIdHeader.
   */
  attributeToMatchItems?: ImportSettingsAttributeToMatchItemsWebModel | null;
};

export namespace ImportSettingsDataWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportSettingsDataWebModel';
}
