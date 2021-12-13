/* eslint-disable */

/**
 * Web model for dodi icon
 */
export type DodiIconWebModel = {
  /**
   * The default dodi icon code
   */
  value: string;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this icon
   */
  parent: string;
};

export namespace DodiIconWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiIconWebModel';
}
