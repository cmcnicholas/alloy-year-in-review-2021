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

  public async customReportGet(code: string): Promise<CustomReportGetWebResponseModel> {
    const options = this.customReportGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public customReportGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/custom-report/${code}`,
    };
  }

  public async customReportEdit(
    code: string,
    requestBody: CustomReportEditWebRequestModel,
  ): Promise<CustomReportEditWebResponseModel> {
    const options = this.customReportEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public customReportEditApiRequestOptions(
    code: string,
    requestBody: CustomReportEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/custom-report/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportDelete(code: string): Promise<void> {
    const options = this.customReportDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public customReportDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/custom-report/${code}`,
    };
  }

  public async customReportList(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<CustomReportListWebResponseModel> {
    const options = this.customReportListApiRequestOptions(query, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public customReportListApiRequestOptions(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async customReportCreate(
    requestBody: CustomReportCreateWebRequestModel,
  ): Promise<CustomReportCreateWebResponseModel> {
    const options = this.customReportCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public customReportCreateApiRequestOptions(
    requestBody: CustomReportCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportClone(
    code: string,
    requestBody: CustomReportCloneWebRequestModel,
  ): Promise<CustomReportCloneWebResponseModel> {
    const options = this.customReportCloneApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public customReportCloneApiRequestOptions(
    code: string,
    requestBody: CustomReportCloneWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report/${code}/clone`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportAddDataSource(
    customReportCode: string,
    requestBody: AddDataSourceWebRequestModelBase,
  ): Promise<AddDataSourceWebResponseModel> {
    const options = this.customReportAddDataSourceApiRequestOptions(customReportCode, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public customReportAddDataSourceApiRequestOptions(
    customReportCode: string,
    requestBody: AddDataSourceWebRequestModelBase,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report/${customReportCode}/data-source`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportEditDataSource(
    customReportCode: string,
    code: string,
    requestBody: EditDataSourceWebRequestModelBase,
  ): Promise<EditDataSourceWebResponseModel> {
    const options = this.customReportEditDataSourceApiRequestOptions(
      customReportCode,
      code,
      requestBody,
    );
    const result = await __request(options);
    return result.body;
  }

  public customReportEditDataSourceApiRequestOptions(
    customReportCode: string,
    code: string,
    requestBody: EditDataSourceWebRequestModelBase,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/custom-report/${customReportCode}/data-source/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportRemoveDataSource(
    customReportCode: string,
    code: string,
    signature?: string | null,
  ): Promise<RemoveDataSourceWebResponseModel> {
    const options = this.customReportRemoveDataSourceApiRequestOptions(
      customReportCode,
      code,
      signature,
    );
    const result = await __request(options);
    return result.body;
  }

  public customReportRemoveDataSourceApiRequestOptions(
    customReportCode: string,
    code: string,
    signature?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/custom-report/${customReportCode}/data-source/${code}`,
      query: {
        signature: signature,
      },
    };
  }

  public async customReportAddDocumentDefinition(
    customReportCode: string,
    requestBody: AddDocumentDefinitionWebRequestModel,
  ): Promise<AddDocumentDefinitionWebResponseModel> {
    const options = this.customReportAddDocumentDefinitionApiRequestOptions(
      customReportCode,
      requestBody,
    );
    const result = await __request(options);
    return result.body;
  }

  public customReportAddDocumentDefinitionApiRequestOptions(
    customReportCode: string,
    requestBody: AddDocumentDefinitionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/custom-report/${customReportCode}/document-definition`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportEditDocumentDefinition(
    customReportCode: string,
    id: string,
    requestBody: EditDocumentDefinitionWebRequestModel,
  ): Promise<EditDocumentDefinitionWebResponseModel> {
    const options = this.customReportEditDocumentDefinitionApiRequestOptions(
      customReportCode,
      id,
      requestBody,
    );
    const result = await __request(options);
    return result.body;
  }

  public customReportEditDocumentDefinitionApiRequestOptions(
    customReportCode: string,
    id: string,
    requestBody: EditDocumentDefinitionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/custom-report/${customReportCode}/document-definition/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async customReportRemoveDocumentDefinition(
    customReportCode: string,
    id: string,
    signature?: string | null,
  ): Promise<RemoveDocumentDefinitionWebResponseModel> {
    const options = this.customReportRemoveDocumentDefinitionApiRequestOptions(
      customReportCode,
      id,
      signature,
    );
    const result = await __request(options);
    return result.body;
  }

  public customReportRemoveDocumentDefinitionApiRequestOptions(
    customReportCode: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions {
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
