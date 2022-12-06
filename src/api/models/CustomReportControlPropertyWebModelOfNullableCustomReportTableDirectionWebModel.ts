/* eslint-disable */

import type { CustomReportControlPropertyFromDataSourceWebModel } from './CustomReportControlPropertyFromDataSourceWebModel';
import type { CustomReportTableDirectionWebModel } from './CustomReportTableDirectionWebModel';

/**
 * Web model for custom report control properties
 */
export type CustomReportControlPropertyWebModelOfNullableCustomReportTableDirectionWebModel = {
  /**
   * The optional constant value for the property
   */
  valueConstant?: CustomReportTableDirectionWebModel | null;
  /**
   * The optional dynamic definition for this property
   */
  valueFromDataSource?: CustomReportControlPropertyFromDataSourceWebModel | null;
};

export namespace CustomReportControlPropertyWebModelOfNullableCustomReportTableDirectionWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator =
    'CustomReportControlPropertyWebModelOfNullableCustomReportTableDirectionWebModel';
}
