/* eslint-disable */

import type { ExportGetFileWebResponseModel } from '../models/ExportGetFileWebResponseModel';
import type { ExportWebRequestModelBase } from '../models/ExportWebRequestModelBase';
import type { ExportWebResponseModel } from '../models/ExportWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ExportService {
  /**
   * Starts an export task for the given AQS query
   * Creates an export task and generates the file name to be used for the export if required
   * @param requestBody The request body containing a ExportWebRequestModelBase
   * @returns ExportWebResponseModel
   */
  exportExport(requestBody: ExportWebRequestModelBase): Promise<ExportWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Starts an export task for the given AQS query
   * Creates an export task and generates the file name to be used for the export if required
   * @param requestBody The request body containing a ExportWebRequestModelBase
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  exportExportApiRequestOptions(requestBody: ExportWebRequestModelBase): ApiRequestOptions;

  /**
   * Get the file AId for the export once completed
   * Finds the file id for the given task or returns not found
   * @param id The id of the export task
   * @returns ExportGetFileWebResponseModel
   */
  exportGetFileId(id: string): Promise<ExportGetFileWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the file AId for the export once completed
   * Finds the file id for the given task or returns not found
   * @param id The id of the export task
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  exportGetFileIdApiRequestOptions(id: string): ApiRequestOptions;
}
