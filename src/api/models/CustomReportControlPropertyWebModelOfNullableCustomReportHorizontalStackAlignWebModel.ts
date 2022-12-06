/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { CustomReportHorizontalStackAlignWebModel } from './CustomReportHorizontalStackAlignWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableCustomReportHorizontalStackAlignWebModel =
  {
    /**
     * The optional constant value for the property
     */
    valueConstant?: CustomReportHorizontalStackAlignWebModel | null;
    /**
     * The optional dynamic definition for this property
     */
    valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
  };

export namespace CustomReportControlPropertyWebModelOfNullableCustomReportHorizontalStackAlignWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'CustomReportControlPropertyWebModelOfNullableCustomReportHorizontalStackAlignWebModel';
}
