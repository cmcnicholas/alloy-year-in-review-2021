/* eslint-disable */

import type { CustomReportAttributeDataSourceWebModelBase } from './CustomReportAttributeDataSourceWebModelBase';
import type { IGeometryObject } from './IGeometryObject';

export type CustomReportConstantGeometryDataSourceWebModel =
  CustomReportAttributeDataSourceWebModelBase & {
    /**
     * The geometry used as the value for this data source
     */
    valueGeometry?: IGeometryObject | null;
  };

export namespace CustomReportConstantGeometryDataSourceWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportConstantGeometryDataSourceWebModel';
}
