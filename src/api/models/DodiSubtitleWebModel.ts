/* eslint-disable */

/**
 * Web model for dodi subtitle
 */
export type DodiSubtitleWebModel = {
  /**
   * The optional subtitle to use to generate the subtitle for an item at runtime. Mustache notation can be used in this template
   * with attribute codes within the curly braces. For example "Light {{attributes_unitNumber}}" will evaluate to "Light 007"
   */
  value: string;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this subtitle
   */
  parent: string;
};

export namespace DodiSubtitleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiSubtitleWebModel';
}
