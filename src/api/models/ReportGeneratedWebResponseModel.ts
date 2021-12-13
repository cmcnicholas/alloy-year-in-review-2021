/* eslint-disable */

/**
 * Response model for submitted bulk actions
 */
export type ReportGeneratedWebResponseModel = {
  /**
   * AId of the created report item
   */
  reportItemId: string;
};

export namespace ReportGeneratedWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ReportGeneratedWebResponseModel';
}
