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
   * @returns CustomReportGetWebResponseModel
   */
  customReportGet({
    code,
  }: {
    /** The Guc for the Custom Report being requested **/
    code: string;
  }): Promise<CustomReportGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a Custom Report by its code
   * Fetches a Custom Report by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the Custom Report being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @returns CustomReportEditWebResponseModel
   */
  customReportEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the custom report to edit/> **/
    code: string;
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportEditWebRequestModel;
  }): Promise<CustomReportEditWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the custom report to edit/> **/
    code: string;
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a Custom Report
   * Deletes a Custom Report based on the information sent in the model
   * @returns void
   */
  customReportDelete({
    code,
  }: {
    /** The Guc of the Custom Report to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a Custom Report
   * Deletes a Custom Report based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the Custom Report to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List Custom Reports
   * Lists the custom reports matching the parameters specified
   * @returns CustomReportListWebResponseModel
   */
  customReportList({
    query,
    page,
    pageSize,
  }: {
    /** Optional query to filter the designs by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CustomReportListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List Custom Reports
   * Lists the custom reports matching the parameters specified
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportListApiRequestOptions({
    query,
    page,
    pageSize,
  }: {
    /** Optional query to filter the designs by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @returns CustomReportCreateWebResponseModel
   */
  customReportCreate({
    requestBody,
  }: {
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportCreateWebRequestModel;
  }): Promise<CustomReportCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a Custom Report
   * Creates a Custom Report based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Clone a Custom Report.
   * Creates an exact copy of a Custom Report with a few values overridden.
   * @returns CustomReportCloneWebResponseModel
   */
  customReportClone({
    code,
    requestBody,
  }: {
    /** The Guc of the report to clone. **/
    code: string;
    /** Model containing the Custom Report details we can override from the original report. **/
    requestBody: CustomReportCloneWebRequestModel;
  }): Promise<CustomReportCloneWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Clone a Custom Report.
   * Creates an exact copy of a Custom Report with a few values overridden.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportCloneApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the report to clone. **/
    code: string;
    /** Model containing the Custom Report details we can override from the original report. **/
    requestBody: CustomReportCloneWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Add a data source to a custom report
   * @returns AddDataSourceWebResponseModel
   */
  customReportAddDataSource({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the data source to **/
    customReportCode: string;
    /** The model containing the info about the data source to add **/
    requestBody: AddDataSourceWebRequestModelBase;
  }): Promise<AddDataSourceWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add a data source to a custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportAddDataSourceApiRequestOptions({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the data source to **/
    customReportCode: string;
    /** The model containing the info about the data source to add **/
    requestBody: AddDataSourceWebRequestModelBase;
  }): ApiRequestOptions;

  /**
   * Edit a data source in a custom report
   * @returns EditDataSourceWebResponseModel
   */
  customReportEditDataSource({
    customReportCode,
    code,
    requestBody,
  }: {
    /** The Guc of the report containing the data source to edit **/
    customReportCode: string;
    /** The Guc of the data source to edit **/
    code: string;
    /** The model containing the info about the data source to edit **/
    requestBody: EditDataSourceWebRequestModelBase;
  }): Promise<EditDataSourceWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a data source in a custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportEditDataSourceApiRequestOptions({
    customReportCode,
    code,
    requestBody,
  }: {
    /** The Guc of the report containing the data source to edit **/
    customReportCode: string;
    /** The Guc of the data source to edit **/
    code: string;
    /** The model containing the info about the data source to edit **/
    requestBody: EditDataSourceWebRequestModelBase;
  }): ApiRequestOptions;

  /**
   * Remove a data source from a custom report
   * @returns RemoveDataSourceWebResponseModel
   */
  customReportRemoveDataSource({
    customReportCode,
    code,
    signature,
  }: {
    /** The Guc of the report containing the data source to remove **/
    customReportCode: string;
    /** The Guc of the data source to remove **/
    code: string;
    /** The signature is used to ensure that the custom report being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report **/
    signature: string | null;
  }): Promise<RemoveDataSourceWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove a data source from a custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportRemoveDataSourceApiRequestOptions({
    customReportCode,
    code,
    signature,
  }: {
    /** The Guc of the report containing the data source to remove **/
    customReportCode: string;
    /** The Guc of the data source to remove **/
    code: string;
    /** The signature is used to ensure that the custom report being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Add a document definition to a custom report
   * @returns AddDocumentDefinitionWebResponseModel
   */
  customReportAddDocumentDefinition({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the document definition to **/
    customReportCode: string;
    /** The model containing the info about the document definition to add **/
    requestBody: AddDocumentDefinitionWebRequestModel;
  }): Promise<AddDocumentDefinitionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add a document definition to a custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportAddDocumentDefinitionApiRequestOptions({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the document definition to **/
    customReportCode: string;
    /** The model containing the info about the document definition to add **/
    requestBody: AddDocumentDefinitionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Edit a document definition in a custom report
   * @returns EditDocumentDefinitionWebResponseModel
   */
  customReportEditDocumentDefinition({
    customReportCode,
    id,
    requestBody,
  }: {
    /** The Guc of the report containing the document definition to edit **/
    customReportCode: string;
    /** The AId of the document definition to edit **/
    id: string;
    /** The model containing the info about the document definition to edit **/
    requestBody: EditDocumentDefinitionWebRequestModel;
  }): Promise<EditDocumentDefinitionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a document definition in a custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportEditDocumentDefinitionApiRequestOptions({
    customReportCode,
    id,
    requestBody,
  }: {
    /** The Guc of the report containing the document definition to edit **/
    customReportCode: string;
    /** The AId of the document definition to edit **/
    id: string;
    /** The model containing the info about the document definition to edit **/
    requestBody: EditDocumentDefinitionWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove a document definition from a custom report
   * @returns RemoveDocumentDefinitionWebResponseModel
   */
  customReportRemoveDocumentDefinition({
    customReportCode,
    id,
    signature,
  }: {
    /** The Guc of the report containing the document definition to remove **/
    customReportCode: string;
    /** The AId of the document definition to remove **/
    id: string;
    /** The signature is used to ensure that the custom report being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report **/
    signature: string | null;
  }): Promise<RemoveDocumentDefinitionWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove a document definition from a custom report
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  customReportRemoveDocumentDefinitionApiRequestOptions({
    customReportCode,
    id,
    signature,
  }: {
    /** The Guc of the report containing the document definition to remove **/
    customReportCode: string;
    /** The AId of the document definition to remove **/
    id: string;
    /** The signature is used to ensure that the custom report being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same custom report **/
    signature: string | null;
  }): ApiRequestOptions;
}
