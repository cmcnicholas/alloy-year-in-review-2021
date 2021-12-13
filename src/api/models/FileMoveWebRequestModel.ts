/* eslint-disable */

/**
 * Web request model for a file move operation
 */
export type FileMoveWebRequestModel = {
  /**
   * The AId of the item representing the folder to move file to
   */
  folderItemId: string;
};

export namespace FileMoveWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'FileMoveWebRequestModel';
}
