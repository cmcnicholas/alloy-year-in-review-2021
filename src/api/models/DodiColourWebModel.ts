/* eslint-disable */

/**
 * Web model for dodi colour
 */
export type DodiColourWebModel = {
  /**
   * The default dodi colour in the format #123456
   */
  value: string;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this colour
   */
  parent: string;
};

export namespace DodiColourWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiColourWebModel';
}
