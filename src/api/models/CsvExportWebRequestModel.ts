/* eslint-disable */

import type { ExportHeaderType } from './ExportHeaderType';
import type { ExportWebRequestModelBase } from './ExportWebRequestModelBase';

export type CsvExportWebRequestModel = ExportWebRequestModelBase & {
  /**
   * The optional export header type. If not specified defaults to export names as export file headers.
   * Supported options are Names and Codes.
   */
  exportHeaderType?: ExportHeaderType | null;
};

export namespace CsvExportWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CsvExportWebRequestModel';
}
