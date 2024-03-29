/* eslint-disable */

import type { EditDataSourceAttributeWebRequestModelBase } from './EditDataSourceAttributeWebRequestModelBase';
import type { EditDataSourceConstantGeometryHeadersWebRequestModel } from './EditDataSourceConstantGeometryHeadersWebRequestModel';
import type { IGeometryObject } from './IGeometryObject';

export type EditDataSourceConstantGeometryWebRequestModel =
  EditDataSourceAttributeWebRequestModelBase & {
    /**
     * The geometry used as the value for this data source
     */
    valueGeometry?: IGeometryObject | null;
    /**
     * Updates the headers on this data source
     */
    headers?: Array<EditDataSourceConstantGeometryHeadersWebRequestModel> | null;
  };

export namespace EditDataSourceConstantGeometryWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'EditDataSourceConstantGeometryWebRequestModel';
}
