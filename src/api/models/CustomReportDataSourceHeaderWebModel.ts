/* eslint-disable */

import type { CustomReportAggregationTypeWebModel } from './CustomReportAggregationTypeWebModel';
import type { DodiAttributeTypeWebModel } from './DodiAttributeTypeWebModel';

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
   */
  title: string;
  /**
   * The data source header type
   *
   */
  headerType: DodiAttributeTypeWebModel;
  /**
   * The data source aggregation type.
   */
  aggregationType?: CustomReportAggregationTypeWebModel | null;
  /**
   * Provides a custom way of describing the header
   */
  overrideTitle?: string | null;
};

export namespace CustomReportDataSourceHeaderWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDataSourceHeaderWebModel';
}
