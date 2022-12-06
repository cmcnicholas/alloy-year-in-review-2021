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

  public async auditLogListAuditLogsByFeatures({
    features,
    startDate,
    endDate,
    page,
    pageSize,
  }: {
    /** Audit logs features to get logs for **/
    features?: Array<LogFeature> | null;
    /** Optional start date, if specified only audit logs created after that date will be retrieved **/
    startDate?: string | null;
    /** Optional start date, if specified only audit logs created before that date will be retrieved **/
    endDate?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AuditLogListWebResponseModel> {
    const options = this.auditLogListAuditLogsByFeaturesApiRequestOptions({
      features,
      startDate,
      endDate,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public auditLogListAuditLogsByFeaturesApiRequestOptions({
    features,
    startDate,
    endDate,
    page,
    pageSize,
  }: {
    /** Audit logs features to get logs for **/
    features?: Array<LogFeature> | null;
    /** Optional start date, if specified only audit logs created after that date will be retrieved **/
    startDate?: string | null;
    /** Optional start date, if specified only audit logs created before that date will be retrieved **/
    endDate?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async auditLogListAuditLogsByDocumentCode({
    documentCode,
    page,
    pageSize,
  }: {
    /** The the document code whose related logs need to be fetched e.g. design code. For user documents use username instead. **/
    documentCode: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AuditLogListWebResponseModel> {
    const options = this.auditLogListAuditLogsByDocumentCodeApiRequestOptions({
      documentCode,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public auditLogListAuditLogsByDocumentCodeApiRequestOptions({
    documentCode,
    page,
    pageSize,
  }: {
    /** The the document code whose related logs need to be fetched e.g. design code. For user documents use username instead. **/
    documentCode: string;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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
