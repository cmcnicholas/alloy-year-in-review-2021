/* eslint-disable */

import type { AuditLogListWebResponseModel } from '../models/AuditLogListWebResponseModel';
import type { LogFeature } from '../models/LogFeature';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface AuditLogService {
  /**
   * List the audit logs
   * Retrieve the audit logs and filter them by request model parameters
   * @param features Audit logs features to get logs for
   * @param startDate Optional start date, if specified only audit logs created after that date will be retrieved
   * @param endDate Optional start date, if specified only audit logs created before that date will be retrieved
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AuditLogListWebResponseModel
   */
  auditLogListAuditLogsByFeatures(
    features?: Array<LogFeature> | null,
    startDate?: string | null,
    endDate?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<AuditLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the audit logs
   * Retrieve the audit logs and filter them by request model parameters
   * @param features Audit logs features to get logs for
   * @param startDate Optional start date, if specified only audit logs created after that date will be retrieved
   * @param endDate Optional start date, if specified only audit logs created before that date will be retrieved
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  auditLogListAuditLogsByFeaturesApiRequestOptions(
    features?: Array<LogFeature> | null,
    startDate?: string | null,
    endDate?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * List the audit logs for a document
   * Retrieve the audit log related to a specific document to get the audit history for that item.
   * @param documentCode The the document code whose related logs need to be fetched e.g. design code. For user documents use username instead.
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AuditLogListWebResponseModel
   */
  auditLogListAuditLogsByDocumentCode(
    documentCode: string,
    page?: number,
    pageSize?: number,
  ): Promise<AuditLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the audit logs for a document
   * Retrieve the audit log related to a specific document to get the audit history for that item.
   * @param documentCode The the document code whose related logs need to be fetched e.g. design code. For user documents use username instead.
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  auditLogListAuditLogsByDocumentCodeApiRequestOptions(
    documentCode: string,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
