/* eslint-disable */

/**
 * Power Bi Report
 */
export type PowerBiReportWebModel = {
  /**
   * Dataset Id
   */
  datasetId: string;
  /**
   * Embed Url
   */
  embedUrl: string;
  /**
   * Report Id
   */
  id: string;
  /**
   * Report Name
   */
  name: string;
  /**
   * Report Web Url
   */
  webUrl: string;
};

export namespace PowerBiReportWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'PowerBiReportWebModel';
}
