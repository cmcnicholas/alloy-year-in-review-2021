/* eslint-disable */

import type { AuditLogListWebResponseModel } from '../models/AuditLogListWebResponseModel';
import type { LogFeature } from '../models/LogFeature';
import type { AuditLogService } from './AuditLogService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class AuditLogServiceDefault implements AuditLogService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async auditLogListAuditLogsByFeatures(
    features?: Array<LogFeature> | null,
    startDate?: string | null,
    endDate?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AuditLogListWebResponseModel> {
    const options = this.auditLogListAuditLogsByFeaturesApiRequestOptions(
      features,
      startDate,
      endDate,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public auditLogListAuditLogsByFeaturesApiRequestOptions(
    features?: Array<LogFeature> | null,
    startDate?: string | null,
    endDate?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/audit-log`,
      query: {
        Features: features,
        StartDate: startDate,
        EndDate: endDate,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async auditLogListAuditLogsByDocumentCode(
    documentCode: string,
    page?: number,
    pageSize?: number,
  ): Promise<AuditLogListWebResponseModel> {
    const options = this.auditLogListAuditLogsByDocumentCodeApiRequestOptions(
      documentCode,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public auditLogListAuditLogsByDocumentCodeApiRequestOptions(
    documentCode: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/audit-log/${documentCode}`,
      query: {
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
