/* eslint-disable */

import type { AddDataSourceWebRequestModelBase } from './AddDataSourceWebRequestModelBase';

export type AddDataSourceAttributeWebRequestModelBase = AddDataSourceWebRequestModelBase & {
  /**
   * Whether the data source is required at report generation time
   */
  required: boolean;
  /**
   * Tags to assign to the data source being created
   */
  tags?: Array<string> | null;
};

export namespace AddDataSourceAttributeWebRequestModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceAttributeWebRequestModelBase';
}
