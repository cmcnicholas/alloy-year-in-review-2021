/* eslint-disable */

import type { AddDataSourceAttributeWebRequestModelBase } from './AddDataSourceAttributeWebRequestModelBase';
import type { IGeometryObject } from './IGeometryObject';

export type AddDataSourceConstantGeometryWebRequestModel =
  AddDataSourceAttributeWebRequestModelBase & {
    /**
     * The geometry used as the value for this data source
     */
    valueGeometry?: IGeometryObject | null;
  };

export namespace AddDataSourceConstantGeometryWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AddDataSourceConstantGeometryWebRequestModel';
}
