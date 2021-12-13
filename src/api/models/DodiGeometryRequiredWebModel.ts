/* eslint-disable */

/**
 * Web model for dodi geometry required
 */
export type DodiGeometryRequiredWebModel = {
  /**
   * If true, items of this design need to have a geometry
   */
  value: boolean;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this geometry required flag
   */
  parent: string;
};

export namespace DodiGeometryRequiredWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiGeometryRequiredWebModel';
}
