/* eslint-disable */

/**
 * Web response model for a list workflow tags operation
 */
export type WorkflowTagsListWebResponseModel = {
  /**
   * The list of workflow tags in the system
   */
  tags: Array<string>;
};

export namespace WorkflowTagsListWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowTagsListWebResponseModel';
}
