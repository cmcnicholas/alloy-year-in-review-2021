/* eslint-disable */

import type { AuditLogListWebResponseModel } from '../models/AuditLogListWebResponseModel';
import type { LogFeature } from '../models/LogFeature';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface AuditLogService {
  /**
   * List the audit logs
   * Retrieve the audit logs and filter them by request model parameters
   * @returns AuditLogListWebResponseModel
   */
  auditLogListAuditLogsByFeatures({
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
  }): Promise<AuditLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the audit logs
   * Retrieve the audit logs and filter them by request model parameters
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  auditLogListAuditLogsByFeaturesApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * List the audit logs for a document
   * Retrieve the audit log related to a specific document to get the audit history for that item.
   * @returns AuditLogListWebResponseModel
   */
  auditLogListAuditLogsByDocumentCode({
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
  }): Promise<AuditLogListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the audit logs for a document
   * Retrieve the audit log related to a specific document to get the audit history for that item.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  auditLogListAuditLogsByDocumentCodeApiRequestOptions({
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
  }): ApiRequestOptions;
}
