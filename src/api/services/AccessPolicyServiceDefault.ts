/* eslint-disable */

import type { AccessPolicyCreateWebRequestModel } from '../models/AccessPolicyCreateWebRequestModel';
import type { AccessPolicyEditWebRequestModel } from '../models/AccessPolicyEditWebRequestModel';
import type { AccessPolicyListWebResponseModel } from '../models/AccessPolicyListWebResponseModel';
import type { AccessPolicyRuleCreateWebRequestModel } from '../models/AccessPolicyRuleCreateWebRequestModel';
import type { AccessPolicyRuleEditWebRequestModel } from '../models/AccessPolicyRuleEditWebRequestModel';
import type { AccessPolicyWebModel } from '../models/AccessPolicyWebModel';
import type { AccessPolicyService } from './AccessPolicyService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class AccessPolicyServiceDefault implements AccessPolicyService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async accessPolicyGet(code: string): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/access-policy/${code}`,
    };
  }

  public async accessPolicyEdit(
    code: string,
    requestBody: AccessPolicyEditWebRequestModel,
  ): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyEditApiRequestOptions(
    code: string,
    requestBody: AccessPolicyEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/access-policy/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyDelete(code: string): Promise<void> {
    const options = this.accessPolicyDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/access-policy/${code}`,
    };
  }

  public async accessPolicyList(
    query?: string | null,
    appliesTo?: Array<string> | null,
    page?: number,
    pageSize?: number,
  ): Promise<AccessPolicyListWebResponseModel> {
    const options = this.accessPolicyListApiRequestOptions(query, appliesTo, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyListApiRequestOptions(
    query?: string | null,
    appliesTo?: Array<string> | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/access-policy`,
      query: {
        Query: query,
        AppliesTo: appliesTo,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async accessPolicyCreate(
    requestBody: AccessPolicyCreateWebRequestModel,
  ): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyCreateApiRequestOptions(
    requestBody: AccessPolicyCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/access-policy`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyCreateRule(
    code: string,
    requestBody: AccessPolicyRuleCreateWebRequestModel,
  ): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyCreateRuleApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyCreateRuleApiRequestOptions(
    code: string,
    requestBody: AccessPolicyRuleCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/access-policy/${code}/rule`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyEditRule(
    code: string,
    id: string,
    requestBody: AccessPolicyRuleEditWebRequestModel,
  ): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyEditRuleApiRequestOptions(code, id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyEditRuleApiRequestOptions(
    code: string,
    id: string,
    requestBody: AccessPolicyRuleEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/access-policy/${code}/rule/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyDeleteRule(
    code: string,
    id: string,
    signature?: string | null,
  ): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyDeleteRuleApiRequestOptions(code, id, signature);
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyDeleteRuleApiRequestOptions(
    code: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/access-policy/${code}/rule/${id}`,
      query: {
        signature: signature,
      },
    };
  }
}
