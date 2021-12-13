/* eslint-disable */

/**
 * Web model for a dodi implements object
 */
export type DodiImplementsWebModel = {
  /**
   * The Guc of the implemented design interface
   */
  code: string;
  /**
   * The parent dodi Guc, i.e. the dodi that defines that this should be implemented
   */
  parent: string;
};

export namespace DodiImplementsWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiImplementsWebModel';
}
