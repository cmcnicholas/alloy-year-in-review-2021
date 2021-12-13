/* eslint-disable */

import type { ImportType } from './ImportType';

/**
 * Web request model for an import initialise operation.
 * This creates new import with user given name and type as well as load items from the import files.
 */
export type ImportInitialiseWebRequestModel = {
  /**
   * The import name
   */
  name: string;
  /**
   * The import type
   */
  type: ImportType;
  /**
   * An array of file item id's to import
   */
  files: Array<string>;
  /**
   * If false this import will not trigger workflows, which is the default behaviour. If true, it will
   */
  triggersWorkflows?: boolean;
};

export namespace ImportInitialiseWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ImportInitialiseWebRequestModel';
}
