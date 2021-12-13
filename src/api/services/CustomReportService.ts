/* eslint-disable */

import type { AddDataSourceWebRequestModelBase } from '../models/AddDataSourceWebRequestModelBase';
import type { AddDataSourceWebResponseModel } from '../models/AddDataSourceWebResponseModel';
import type { AddDocumentDefinitionWebRequestModel } from '../models/AddDocumentDefinitionWebRequestModel';
import type { AddDocumentDefinitionWebResponseModel } from '../models/AddDocumentDefinitionWebResponseModel';
import type { CustomReportCloneWebRequestModel } from '../models/CustomReportCloneWebRequestModel';
import type { CustomReportCloneWebResponseModel } from '../models/CustomReportCloneWebResponseModel';
import type { CustomReportCreateWebRequestModel } from '../models/CustomReportCreateWebRequestModel';
import type { CustomReportCreateWebResponseModel } from '../models/CustomReportCreateWebResponseModel';
import type { CustomReportEditWebRequestModel } from '../models/CustomReportEditWebRequestModel';
import type { CustomReportEditWebResponseModel } from '../models/CustomReportEditWebResponseModel';
import type { CustomReportGetWebResponseModel } from '../models/CustomReportGetWebResponseModel';
import type { CustomReportListWebResponseModel } from '../models/CustomReportListWebResponseModel';
import type { EditDataSourceWebRequestModelBase } from '../models/EditDataSourceWebRequestModelBase';
import type { EditDataSourceWebResponseModel } from '../models/EditDataSourceWebResponseModel';
import type { EditDocumentDefinitionWebRequestModel } from '../models/EditDocumentDefinitionWebRequestModel';
import type { EditDocumentDefinitionWebResponseModel } from '../models/EditDocumentDefinitionWebResponseModel';
import type { RemoveDataSourceWebResponseModel } from '../models/RemoveDataSourceWebResponseModel';
import type { RemoveDocumentDefinitionWebResponseModel } from '../models/RemoveDocumentDefinitionWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface CustomReportService {
  /**
   * Get a Custom Report by its code
   * Fetches a Custom Report by its globally unique code (Guc).
   * @param code The Guc for the Custom Report being requested
   * @returns CustomReportGetWebResponseModel
   */
  customReportGet(code: string): Promise<CustomReportGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a Custom Report by its code
   * Fetches a Custom Report by its globally unique code (Guc).
   * @param code The Guc for the Custom Report being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @param code The Guc of the custom report to edit/&gt;
   * @param requestBody Model containing the new Custom Report details
   * @returns CustomReportEditWebResponseModel
   */
  customReportEdit(
    code: string,
    requestBody: CustomReportEditWebRequestModel,
  ): Promise<CustomReportEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @param code The Guc of the custom report to edit/&gt;
   * @param requestBody Model containing the new Custom Report details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportEditApiRequestOptions(
    code: string,
    requestBody: CustomReportEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a Custom Report
   * Deletes a Custom Report based on the information sent in the model
   * @param code The Guc of the Custom Report to delete
   * @returns void
   */
  customReportDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a Custom Report
   * Deletes a Custom Report based on the information sent in the model
   * @param code The Guc of the Custom Report to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List Custom Reports
   * Lists the custom reports matching the parameters specified
   * @param query Optional query to filter the designs by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns CustomReportListWebResponseModel
   */
  customReportList(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<CustomReportListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List Custom Reports
   * Lists the custom reports matching the parameters specified
   * @param query Optional query to filter the designs by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportListApiRequestOptions(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @param requestBody Model containing the new Custom Report details
   * @returns CustomReportCreateWebResponseModel
   */
  customReportCreate(
    requestBody: CustomReportCreateWebRequestModel,
  ): Promise<CustomReportCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @param requestBody Model containing the new Custom Report details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportCreateApiRequestOptions(
    requestBody: CustomReportCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Clone a Custom Report.
   * Creates an exact copy of a Custom Report with a few values overridden.
   * @param code The Guc of the report to clone.
   * @param requestBody Model containing the Custom Report details we can override from the original report.
   * @returns CustomReportCloneWebResponseModel
   */
  customReportClone(
    code: string,
    requestBody: CustomReportCloneWebRequestModel,
  ): Promise<CustomReportCloneWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Clone a Custom Report.
   * Creates an exact copy of a Custom Report with a few values overridden.
   * @param code The Guc of the report to clone.
   * @param requestBody Model containing the Custom Report details we can override from the original report.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportCloneApiRequestOptions(
    code: string,
    requestBody: CustomReportCloneWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Add a data source to a custom report
   * @param customReportCode The Guc of the report to add the data source to
   * @param requestBody The model containing the info about the data source to add
   * @returns AddDataSourceWebResponseModel
   */
  customReportAddDataSource(
    customReportCode: string,
    requestBody: AddDataSourceWebRequestModelBase,
  ): Promise<AddDataSourceWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add a data source to a custom report
   * @param customReportCode The Guc of the report to add the data source to
   * @param requestBody The model containing the info about the data source to add
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportAddDataSourceApiRequestOptions(
    customReportCode: string,
    requestBody: AddDataSourceWebRequestModelBase,
  ): ApiRequestOptions;

  /**
   * Edit a data source in a custom report
   * @param customReportCode The Guc of the report containing the data source to edit
   * @param code The Guc of the data source to edit
   * @param requestBody The model containing the info about the data source to edit
   * @returns EditDataSourceWebResponseModel
   */
  customReportEditDataSource(
    customReportCode: string,
    code: string,
    requestBody: EditDataSourceWebRequestModelBase,
  ): Promise<EditDataSourceWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a data source in a custom report
   * @param customReportCode The Guc of the report containing the data source to edit
   * @param code The Guc of the data source to edit
   * @param requestBody The model containing the info about the data source to edit
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportEditDataSourceApiRequestOptions(
    customReportCode: string,
    code: string,
    requestBody: EditDataSourceWebRequestModelBase,
  ): ApiRequestOptions;

  /**
   * Remove a data source from a custom report
   * @param customReportCode The Guc of the report containing the data source to remove
   * @param code The Guc of the data source to remove
   * @param signature The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   * @returns RemoveDataSourceWebResponseModel
   */
  customReportRemoveDataSource(
    customReportCode: string,
    code: string,
    signature?: string | null,
  ): Promise<RemoveDataSourceWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove a data source from a custom report
   * @param customReportCode The Guc of the report containing the data source to remove
   * @param code The Guc of the data source to remove
   * @param signature The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportRemoveDataSourceApiRequestOptions(
    customReportCode: string,
    code: string,
    signature?: string | null,
  ): ApiRequestOptions;

  /**
   * Add a document definition to a custom report
   * @param customReportCode The Guc of the report to add the document definition to
   * @param requestBody The model containing the info about the document definition to add
   * @returns AddDocumentDefinitionWebResponseModel
   */
  customReportAddDocumentDefinition(
    customReportCode: string,
    requestBody: AddDocumentDefinitionWebRequestModel,
  ): Promise<AddDocumentDefinitionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add a document definition to a custom report
   * @param customReportCode The Guc of the report to add the document definition to
   * @param requestBody The model containing the info about the document definition to add
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportAddDocumentDefinitionApiRequestOptions(
    customReportCode: string,
    requestBody: AddDocumentDefinitionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Edit a document definition in a custom report
   * @param customReportCode The Guc of the report containing the document definition to edit
   * @param id The AId of the document definition to edit
   * @param requestBody The model containing the info about the document definition to edit
   * @returns EditDocumentDefinitionWebResponseModel
   */
  customReportEditDocumentDefinition(
    customReportCode: string,
    id: string,
    requestBody: EditDocumentDefinitionWebRequestModel,
  ): Promise<EditDocumentDefinitionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a document definition in a custom report
   * @param customReportCode The Guc of the report containing the document definition to edit
   * @param id The AId of the document definition to edit
   * @param requestBody The model containing the info about the document definition to edit
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportEditDocumentDefinitionApiRequestOptions(
    customReportCode: string,
    id: string,
    requestBody: EditDocumentDefinitionWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Remove a document definition from a custom report
   * @param customReportCode The Guc of the report containing the document definition to remove
   * @param id The AId of the document definition to remove
   * @param signature The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   * @returns RemoveDocumentDefinitionWebResponseModel
   */
  customReportRemoveDocumentDefinition(
    customReportCode: string,
    id: string,
    signature?: string | null,
  ): Promise<RemoveDocumentDefinitionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove a document definition from a custom report
   * @param customReportCode The Guc of the report containing the document definition to remove
   * @param id The AId of the document definition to remove
   * @param signature The signature is used to ensure that the custom report being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportRemoveDocumentDefinitionApiRequestOptions(
    customReportCode: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions;
}
