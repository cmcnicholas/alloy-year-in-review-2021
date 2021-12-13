/* eslint-disable */

import type { CustomerCollectionsMetricsWebModel } from './CustomerCollectionsMetricsWebModel';

/**
 * Response model for get operation on customer metrics
 */
export type CustomerGetMetricsWebResponseModel = {
  /**
   * Corresponds to dbStats.storageSize
   * (bytes)
   * This covers the disk used by the database documents
   *
   * See https://docs.mongodb.com/manual/reference/command/dbStats/#dbStats.storageSize
   */
  databaseDocumentStorageSize: number;
  /**
   * Corresponds to dbStats.indexSize
   * (bytes)
   * This covers the disk used by the database indices
   *
   * See https://docs.mongodb.com/manual/reference/command/dbStats/#dbStats.indexSize
   */
  databaseIndexStorageSize: number;
  /**
   * Covers the item collection.
   * (bytes)
   *
   * Note - this statistic is already included within DatabaseDocumentStorageSize and DatabaseIndexStorageSize
   */
  itemCollectionMetrics: CustomerCollectionsMetricsWebModel;
  /**
   * Covers the itemLog and log collections
   * (bytes)
   *
   * Note - this statistic is already included within DatabaseDocumentStorageSize and DatabaseIndexStorageSize
   */
  auditCollectionMetrics: CustomerCollectionsMetricsWebModel;
};

export namespace CustomerGetMetricsWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerGetMetricsWebResponseModel';
}
