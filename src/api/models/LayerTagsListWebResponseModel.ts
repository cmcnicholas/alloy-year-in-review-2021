/* eslint-disable */

/**
 * Web response model for a list layer tags operation
 */
export type LayerTagsListWebResponseModel = {
  /**
   * The list of layer tags in the system
   */
  tags: Array<string>;
};

export namespace LayerTagsListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'LayerTagsListWebResponseModel';
}
