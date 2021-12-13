/* eslint-disable */

import type { EditDataSourceWebRequestModelBase } from './EditDataSourceWebRequestModelBase';

export type EditDataSourceAttributeWebRequestModelBase = EditDataSourceWebRequestModelBase & {
  /**
   * Whether the data source is required at report generation time
   */
  required: boolean;
  /**
   * Tags to assign to the data source being created
   */
  tags?: Array<string> | null;
};

export namespace EditDataSourceAttributeWebRequestModelBase {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceAttributeWebRequestModelBase';
}
