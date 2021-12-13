/* eslint-disable */

import type { DataSourceHeaderSortDataWebModel } from './DataSourceHeaderSortDataWebModel';

/**
 * Edit data source web request model
 */
export type EditDataSourceWebRequestModelBase = {
  /**
   * The name of the data source
   */
  name: string;
  /**
   * The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   */
  signature: string;
  /**
   * The List of SortingOptions to specify the columns the user wants to sort on.
   */
  headersSortData?: Array<DataSourceHeaderSortDataWebModel> | null;
  discriminator: string;
};

export namespace EditDataSourceWebRequestModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceWebRequestModelBase';
}
