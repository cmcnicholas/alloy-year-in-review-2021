/* eslint-disable */

import type { GetEmbedTokenWebResponseModel } from '../models/GetEmbedTokenWebResponseModel';
import type { ListPowerBiReportsWebResponseModel } from '../models/ListPowerBiReportsWebResponseModel';
import type { PowerBiService } from './PowerBiService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class PowerBiServiceDefault implements PowerBiService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async powerBiListReports(): Promise<ListPowerBiReportsWebResponseModel> {
    const options = this.powerBiListReportsApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public powerBiListReportsApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/power-bi/reports`,
    };
  }

  public async powerBiGetEmbedTokenReportCreate(): Promise<GetEmbedTokenWebResponseModel> {
    const options = this.powerBiGetEmbedTokenReportCreateApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public powerBiGetEmbedTokenReportCreateApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/power-bi/embed-token-report-create`,
    };
  }

  public async powerBiGetEmbedTokenReportEdit(
    reportKey: string,
  ): Promise<GetEmbedTokenWebResponseModel> {
    const options = this.powerBiGetEmbedTokenReportEditApiRequestOptions(reportKey);
    const result = await __request(options);
    return result.body;
  }

  public powerBiGetEmbedTokenReportEditApiRequestOptions(reportKey: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/power-bi/embed-token-report-edit/${reportKey}`,
    };
  }

  public async powerBiGetEmbedTokenReportView(
    reportKey: string,
  ): Promise<GetEmbedTokenWebResponseModel> {
    const options = this.powerBiGetEmbedTokenReportViewApiRequestOptions(reportKey);
    const result = await __request(options);
    return result.body;
  }

  public powerBiGetEmbedTokenReportViewApiRequestOptions(reportKey: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/power-bi/embed-token-report-view/${reportKey}`,
    };
  }

  public async powerBiDeleteReport(reportKey: string): Promise<void> {
    const options = this.powerBiDeleteReportApiRequestOptions(reportKey);
    const result = await __request(options);
    return result.body;
  }

  public powerBiDeleteReportApiRequestOptions(reportKey: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/power-bi/report/${reportKey}`,
    };
  }
}
