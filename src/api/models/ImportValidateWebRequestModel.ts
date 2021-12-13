/* eslint-disable */

import type { CollectionCode } from './CollectionCode';
import type { ImportMode } from './ImportMode';
import type { ImportSettingsBaseWebModel } from './ImportSettingsBaseWebModel';

/**
 * Web request model for an import validate operation.
 */
export type ImportValidateWebRequestModel = {
  /**
   * The optional Guc of the destination design to import items
   */
  designCode?: string | null;
  /**
   * The optional destination collection to which to import items
   */
  collection?: CollectionCode | null;
  /**
   * The import mode (Append, Replace or Merge)
   */
  mode: ImportMode;
  /**
   * A JSON object that describes the import settings
   */
  settings: ImportSettingsBaseWebModel;
  /**
   * The import signature that ensures the operation is being applied on the last version of the import
   */
  signature: string;
};

export namespace ImportValidateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportValidateWebRequestModel';
}
