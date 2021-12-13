/* eslint-disable */

/**
 * Export web response model
 */
export type ExportWebResponseModel = {
  /**
   * The export task idAId
   *
   * Use this in `GET api/export/file-id` to request the file id for the export once completed
   */
  backgroundTaskId: string;
  /**
   * The file name that will be used for the export
   */
  fileName: string;
};

export namespace ExportWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ExportWebResponseModel';
}
