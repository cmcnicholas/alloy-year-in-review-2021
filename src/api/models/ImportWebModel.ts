/* eslint-disable */

import type { AlloyExceptionWebModel } from './AlloyExceptionWebModel';
import type { CollectionCode } from './CollectionCode';
import type { ImportHeader } from './ImportHeader';
import type { ImportMode } from './ImportMode';
import type { ImportSettingsBaseWebModel } from './ImportSettingsBaseWebModel';
import type { ImportStatus } from './ImportStatus';
import type { ImportSummary } from './ImportSummary';
import type { ImportType } from './ImportType';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for import
 */
export type ImportWebModel = {
  /**
   * The import name
   */
  name: string;
  /**
   * The import Guc
   */
  code: string;
  /**
   * The import type
   */
  type: ImportType;
  /**
   * The optional destination design Guc to import into
   */
  designCode?: string | null;
  /**
   * The optional destination collection to import into
   */
  collection?: CollectionCode | null;
  /**
   * The mode to apply when importing (Append, Replace or Merge)
   */
  mode?: ImportMode | null;
  /**
   * The import status. Accepted values are New, Initialising, Initialised, Validating, Validated, Processing, Processed, Failed
   */
  status: ImportStatus;
  /**
   * An array of file item id's to import
   */
  files: Array<string>;
  /**
   * An array of header items defining the structure of the import files
   */
  headers: Array<ImportHeader>;
  /**
   * An optional JSON object that describes the import settings (info about matching attributes to file headers etc)
   */
  settings?: ImportSettingsBaseWebModel | null;
  /**
   * An optional JSON object of the error
   */
  error?: AlloyExceptionWebModel | null;
  /**
   * An optional import summary object with number of success/warning/error validated or committed records
   */
  summary?: ImportSummary | null;
  /**
   * If import results were requested this id will be set to the results csv file id, so that the file
   * can be downloaded via file api when the results csv task is done.
   */
  resultsCsvFileId?: string | null;
  /**
   * If false this import will not trigger workflows, which is the default behaviour. If true, it will
   */
  triggersWorkflows?: boolean;
  /**
   * The import metadata
   */
  metadata: MetadataWebModel;
};

export namespace ImportWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportWebModel';
}
