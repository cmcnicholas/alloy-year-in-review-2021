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
import type { CustomReportService } from './CustomReportService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class CustomReportServiceDefault implements CustomReportService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async customReportGet({
    code,
  }: {
    /** The Guc for the Custom Report being requested **/
    code: string;
  }): Promise<CustomReportGetWebResponseModel> {
    const options = this.customReportGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the Custom Report being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/custom-report/${code}`,
    };
  }

  public async customReportEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the custom report to edit/> **/
    code: string;
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportEditWebRequestModel;
  }): Promise<CustomReportEditWebResponseModel> {
    const options = this.customReportEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the custom report to edit/> **/
    code: string;
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/custom-report/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportDelete({
    code,
  }: {
    /** The Guc of the Custom Report to delete **/
    code: string;
  }): Promise<void> {
    const options = this.customReportDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the Custom Report to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/custom-report/${code}`,
    };
  }

  public async customReportList({
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
  }): Promise<CustomReportListWebResponseModel> {
    const options = this.customReportListApiRequestOptions({
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportListApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/custom-report`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async customReportCreate({
    requestBody,
  }: {
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportCreateWebRequestModel;
  }): Promise<CustomReportCreateWebResponseModel> {
    const options = this.customReportCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new Custom Report details **/
    requestBody: CustomReportCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportClone({
    code,
    requestBody,
  }: {
    /** The Guc of the report to clone. **/
    code: string;
    /** Model containing the Custom Report details we can override from the original report. **/
    requestBody: CustomReportCloneWebRequestModel;
  }): Promise<CustomReportCloneWebResponseModel> {
    const options = this.customReportCloneApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportCloneApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the report to clone. **/
    code: string;
    /** Model containing the Custom Report details we can override from the original report. **/
    requestBody: CustomReportCloneWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report/${code}/clone`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportAddDataSource({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the data source to **/
    customReportCode: string;
    /** The model containing the info about the data source to add **/
    requestBody: AddDataSourceWebRequestModelBase;
  }): Promise<AddDataSourceWebResponseModel> {
    const options = this.customReportAddDataSourceApiRequestOptions({
      customReportCode,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportAddDataSourceApiRequestOptions({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the data source to **/
    customReportCode: string;
    /** The model containing the info about the data source to add **/
    requestBody: AddDataSourceWebRequestModelBase;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report/${customReportCode}/data-source`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportEditDataSource({
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
  }): Promise<EditDataSourceWebResponseModel> {
    const options = this.customReportEditDataSourceApiRequestOptions({
      customReportCode,
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportEditDataSourceApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/custom-report/${customReportCode}/data-source/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportRemoveDataSource({
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
  }): Promise<RemoveDataSourceWebResponseModel> {
    const options = this.customReportRemoveDataSourceApiRequestOptions({
      customReportCode,
      code,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportRemoveDataSourceApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/custom-report/${customReportCode}/data-source/${code}`,
      query: {
        signature: signature,
      },
    };
  }

  public async customReportAddDocumentDefinition({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the document definition to **/
    customReportCode: string;
    /** The model containing the info about the document definition to add **/
    requestBody: AddDocumentDefinitionWebRequestModel;
  }): Promise<AddDocumentDefinitionWebResponseModel> {
    const options = this.customReportAddDocumentDefinitionApiRequestOptions({
      customReportCode,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportAddDocumentDefinitionApiRequestOptions({
    customReportCode,
    requestBody,
  }: {
    /** The Guc of the report to add the document definition to **/
    customReportCode: string;
    /** The model containing the info about the document definition to add **/
    requestBody: AddDocumentDefinitionWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report/${customReportCode}/document-definition`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportEditDocumentDefinition({
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
  }): Promise<EditDocumentDefinitionWebResponseModel> {
    const options = this.customReportEditDocumentDefinitionApiRequestOptions({
      customReportCode,
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportEditDocumentDefinitionApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/custom-report/${customReportCode}/document-definition/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportRemoveDocumentDefinition({
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
  }): Promise<RemoveDocumentDefinitionWebResponseModel> {
    const options = this.customReportRemoveDocumentDefinitionApiRequestOptions({
      customReportCode,
      id,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public customReportRemoveDocumentDefinitionApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/custom-report/${customReportCode}/document-definition/${id}`,
      query: {
        signature: signature,
      },
    };
  }
}
