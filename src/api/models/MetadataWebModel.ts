/* eslint-disable */

/**
 * Web model for the metadata
 */
export type MetadataWebModel = {
  /**
   * The datetime at which this element was created
   */
  createdDate: string;
  /**
   * The username of the user that created this element
   */
  createdUserUsername: string;
  /**
   * The datetime at which this element was edited
   */
  lastEditDate?: string | null;
  /**
   * The username of the user that last edited this element
   */
  lastEditUserUsername?: string | null;
  /**
   * The signature to send for every edit/delete operation related to this element
   */
  signature: string;
};

export namespace MetadataWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MetadataWebModel';
}
