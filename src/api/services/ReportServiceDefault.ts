/* eslint-disable */

import type { ReportGeneratedWebResponseModel } from '../models/ReportGeneratedWebResponseModel';
import type { ReportGenerateWebRequestModel } from '../models/ReportGenerateWebRequestModel';
import type { ReportListApplicableDodisWebResponseModel } from '../models/ReportListApplicableDodisWebResponseModel';
import type { ReportListWebResponseModel } from '../models/ReportListWebResponseModel';
import type { ReportService } from './ReportService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ReportServiceDefault implements ReportService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async reportList(
    dodiCode: string,
    reportImplementsInterface?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ReportListWebResponseModel> {
    const options = this.reportListApiRequestOptions(
      dodiCode,
      reportImplementsInterface,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public reportListApiRequestOptions(
    dodiCode: string,
    reportImplementsInterface?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/report/dodi/${dodiCode}`,
      query: {
        ReportImplementsInterface: reportImplementsInterface,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async reportListApplicableDodis(
    dodiCode: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ReportListApplicableDodisWebResponseModel> {
    const options = this.reportListApplicableDodisApiRequestOptions(
      dodiCode,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public reportListApplicableDodisApiRequestOptions(
    dodiCode: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/report/${dodiCode}/applicable-dodis`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async reportGenerate(
    requestBody: ReportGenerateWebRequestModel,
  ): Promise<ReportGeneratedWebResponseModel> {
    const options = this.reportGenerateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public reportGenerateApiRequestOptions(
    requestBody: ReportGenerateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/report/generate`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
