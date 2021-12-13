/* eslint-disable */

/**
 * File bulk download web response model
 */
export type FileBulkDownloadWebResponseModel = {
  /**
   * The bulk file download task AId
   *
   * Use this in `GET api/file/bulk-download/{id}/file` to request the file id for the file download archive once completed
   */
  backgroundTaskId: string;
  /**
   * The file name that will be used for the file download archive
   */
  fileName: string;
};

export namespace FileBulkDownloadWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'FileBulkDownloadWebResponseModel';
}
