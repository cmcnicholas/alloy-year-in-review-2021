/* eslint-disable */

import type { CustomReportAggregationType } from './CustomReportAggregationType';
import type { DodiAttributeType } from './DodiAttributeType';

/**
 * Header web model
 */
export type CustomReportDataSourceHeaderWebModel = {
  /**
   * The data source header id
   */
  id: string;
  /**
   * The data source header title
   *
   */
  title: string;
  /**
   * The data source header type
   *
   */
  headerType: DodiAttributeType;
  /**
   * The data source aggregation type.
   */
  aggregationType?: CustomReportAggregationType | null;
};

export namespace CustomReportDataSourceHeaderWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDataSourceHeaderWebModel';
}
