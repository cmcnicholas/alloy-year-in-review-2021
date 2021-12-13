/* eslint-disable */

import type { ExportGetFileWebResponseModel } from '../models/ExportGetFileWebResponseModel';
import type { ExportWebRequestModelBase } from '../models/ExportWebRequestModelBase';
import type { ExportWebResponseModel } from '../models/ExportWebResponseModel';
import type { ExportService } from './ExportService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ExportServiceDefault implements ExportService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async exportExport(
    requestBody: ExportWebRequestModelBase,
  ): Promise<ExportWebResponseModel> {
    const options = this.exportExportApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public exportExportApiRequestOptions(requestBody: ExportWebRequestModelBase): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/export`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async exportGetFileId(id: string): Promise<ExportGetFileWebResponseModel> {
    const options = this.exportGetFileIdApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public exportGetFileIdApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/export/${id}/file`,
    };
  }
}
