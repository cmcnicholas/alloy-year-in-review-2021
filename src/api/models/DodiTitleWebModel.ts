/* eslint-disable */

/**
 * Web model for dodi title
 */
export type DodiTitleWebModel = {
  /**
   * The title template to use to generate the title for an item at runtime. Mustache notation can be used in this template
   * with attribute codes within the curly braces. For example "Job-{{attributes_jobNumber}}" will evaluate to "Job-1232"
   */
  value: string;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this title
   */
  parent: string;
};

export namespace DodiTitleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiTitleWebModel';
}
