/* eslint-disable */

import type { EditDataSourceJoinHeadersWebRequestModel } from './EditDataSourceJoinHeadersWebRequestModel';
import type { EditDataSourceWebRequestModelBase } from './EditDataSourceWebRequestModelBase';

export type EditDataSourceJoinWebRequestModel = EditDataSourceWebRequestModelBase & {
  /**
   * Left data source
   */
  leftDataSource: string;
  /**
   * Headers of the left data source to use for the join
   */
  leftHeader: string;
  /**
   * Right data source
   */
  rightDataSource: string;
  /**
   * Header of the right data source to use for the join
   */
  rightHeader: string;
  /**
   * Updates the headers on this data source
   */
  headers?: Array<EditDataSourceJoinHeadersWebRequestModel> | null;
};

export namespace EditDataSourceJoinWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceJoinWebRequestModel';
}
