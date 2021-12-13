/* eslint-disable */

/**
 * Web response model for a file creation operation
 */
export type FileCreateWebResponseModel = {
  /**
   * The AId of the item representing the file
   */
  fileItemId: string;
};

export namespace FileCreateWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'FileCreateWebResponseModel';
}
