/* eslint-disable */

import type { ReportGeneratedWebResponseModel } from '../models/ReportGeneratedWebResponseModel';
import type { ReportGenerateWebRequestModel } from '../models/ReportGenerateWebRequestModel';
import type { ReportListApplicableDodisWebResponseModel } from '../models/ReportListApplicableDodisWebResponseModel';
import type { ReportListWebResponseModel } from '../models/ReportListWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ReportService {
  /**
   * Lists the report designs
   * Lists reports that are applicable to another dodi (with their permissions) and filtered by a report type dodi
   * @returns ReportListWebResponseModel
   */
  reportList({
    dodiCode,
    reportImplementsInterface,
    page,
    pageSize,
  }: {
    /** The Guc to filter reports that apply to this dodi **/
    dodiCode: string;
    /** Guc to filter report designs by. **/
    reportImplementsInterface?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ReportListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists the report designs
   * Lists reports that are applicable to another dodi (with their permissions) and filtered by a report type dodi
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  reportListApiRequestOptions({
    dodiCode,
    reportImplementsInterface,
    page,
    pageSize,
  }: {
    /** The Guc to filter reports that apply to this dodi **/
    dodiCode: string;
    /** Guc to filter report designs by. **/
    reportImplementsInterface?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists the applicable dodis for report design code
   * Lists applicable dodis with their permissions attached for given report design code. If applicable dodi is interface also all designs that implement it will be in the response.
   * @returns ReportListApplicableDodisWebResponseModel
   */
  reportListApplicableDodis({
    dodiCode,
    query,
    page,
    pageSize,
  }: {
    /** The Guc report dodi to get applicable dodis for **/
    dodiCode: string;
    /** Optional query to filter the report applicable dodis by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ReportListApplicableDodisWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists the applicable dodis for report design code
   * Lists applicable dodis with their permissions attached for given report design code. If applicable dodi is interface also all designs that implement it will be in the response.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  reportListApplicableDodisApiRequestOptions({
    dodiCode,
    query,
    page,
    pageSize,
  }: {
    /** The Guc report dodi to get applicable dodis for **/
    dodiCode: string;
    /** Optional query to filter the report applicable dodis by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Start the generation of a report whose item has already been created.
   * This will spawn an asynchronous task executed in the background whose status can be checked using the
   * Get endpoint. When the report generation has been completed, its data will be found in
   * the report item (the one with the same id as the input item)
   * @returns ReportGeneratedWebResponseModel
   */
  reportGenerate({
    requestBody,
  }: {
    /** The model containing the info about the report being created **/
    requestBody: ReportGenerateWebRequestModel;
  }): Promise<ReportGeneratedWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Start the generation of a report whose item has already been created.
   * This will spawn an asynchronous task executed in the background whose status can be checked using the
   * Get endpoint. When the report generation has been completed, its data will be found in
   * the report item (the one with the same id as the input item)
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  reportGenerateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the info about the report being created **/
    requestBody: ReportGenerateWebRequestModel;
  }): ApiRequestOptions;
}
