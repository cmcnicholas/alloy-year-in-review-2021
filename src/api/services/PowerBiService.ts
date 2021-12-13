/* eslint-disable */

import type { GetEmbedTokenWebResponseModel } from '../models/GetEmbedTokenWebResponseModel';
import type { ListPowerBiReportsWebResponseModel } from '../models/ListPowerBiReportsWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface PowerBiService {
  /**
   * List the power bi reports
   * @returns ListPowerBiReportsWebResponseModel
   */
  powerBiListReports(): Promise<ListPowerBiReportsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List the power bi reports
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  powerBiListReportsApiRequestOptions(): ApiRequestOptions;

  /**
   * Get the embed token to create a power bi report
   * @returns GetEmbedTokenWebResponseModel
   */
  powerBiGetEmbedTokenReportCreate(): Promise<GetEmbedTokenWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the embed token to create a power bi report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  powerBiGetEmbedTokenReportCreateApiRequestOptions(): ApiRequestOptions;

  /**
   * Get the embed token to edit a power bi report
   * @param reportKey
   * @returns GetEmbedTokenWebResponseModel
   */
  powerBiGetEmbedTokenReportEdit(reportKey: string): Promise<GetEmbedTokenWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the embed token to edit a power bi report
   * @param reportKey
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  powerBiGetEmbedTokenReportEditApiRequestOptions(reportKey: string): ApiRequestOptions;

  /**
   * Get the embed token to view a power bi report
   * @param reportKey
   * @returns GetEmbedTokenWebResponseModel
   */
  powerBiGetEmbedTokenReportView(reportKey: string): Promise<GetEmbedTokenWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the embed token to view a power bi report
   * @param reportKey
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  powerBiGetEmbedTokenReportViewApiRequestOptions(reportKey: string): ApiRequestOptions;

  /**
   * Delete a power bi report
   * @param reportKey
   * @returns void
   */
  powerBiDeleteReport(reportKey: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a power bi report
   * @param reportKey
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  powerBiDeleteReportApiRequestOptions(reportKey: string): ApiRequestOptions;
}
