/* eslint-disable */

/**
 * Web model for customer collections metrics
 */
export type CustomerCollectionsMetricsWebModel = {
  /**
   * Corresponds to the total of all collStats.totalIndexSize¶ metrics for the relevant collections.
   * (bytes)
   * This covers the disk used by the collection indices.
   *
   * See https://docs.mongodb.com/manual/reference/command/collStats/#collStats.totalIndexSize
   */
  totalIndexSize: number;
  /**
   * Corresponds to the total of all collStats.storageSize¶ metrics for the relevant collections.
   * (bytes)
   * This covers the disk used by the collection documents.
   *
   * See https://docs.mongodb.com/manual/reference/command/collStats/#collStats.storageSize
   */
  totalDocumentSize: number;
};

export namespace CustomerCollectionsMetricsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerCollectionsMetricsWebModel';
}
