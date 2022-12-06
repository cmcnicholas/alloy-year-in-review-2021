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

  public async accessPolicyGet({
    code,
  }: {
    /** The Guc for the Access Policy being requested **/
    code: string;
  }): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the Access Policy being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/access-policy/${code}`,
    };
  }

  public async accessPolicyEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit **/
    code: string;
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyEditWebRequestModel;
  }): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit **/
    code: string;
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/access-policy/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyDelete({
    code,
  }: {
    /** The Guc of the Access Policy to delete **/
    code: string;
  }): Promise<void> {
    const options = this.accessPolicyDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the Access Policy to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/access-policy/${code}`,
    };
  }

  public async accessPolicyList({
    query,
    appliesTo,
    page,
    pageSize,
  }: {
    /** Optional query to filter the access policies by **/
    query?: string | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    appliesTo?: Array<string> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AccessPolicyListWebResponseModel> {
    const options = this.accessPolicyListApiRequestOptions({
      query,
      appliesTo,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyListApiRequestOptions({
    query,
    appliesTo,
    page,
    pageSize,
  }: {
    /** Optional query to filter the access policies by **/
    query?: string | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    appliesTo?: Array<string> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async accessPolicyCreate({
    requestBody,
  }: {
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyCreateWebRequestModel;
  }): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/access-policy`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyCreateRule({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to add a rule to **/
    code: string;
    /** Model containing the information of the rule to be added **/
    requestBody: AccessPolicyRuleCreateWebRequestModel;
  }): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyCreateRuleApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyCreateRuleApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to add a rule to **/
    code: string;
    /** Model containing the information of the rule to be added **/
    requestBody: AccessPolicyRuleCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/access-policy/${code}/rule`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyEditRule({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit a rule on **/
    code: string;
    /** The AId of the rule to edit **/
    id: string;
    /** The model containing the info necessary to edit a rule on the Access Policy **/
    requestBody: AccessPolicyRuleEditWebRequestModel;
  }): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyEditRuleApiRequestOptions({
      code,
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyEditRuleApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit a rule on **/
    code: string;
    /** The AId of the rule to edit **/
    id: string;
    /** The model containing the info necessary to edit a rule on the Access Policy **/
    requestBody: AccessPolicyRuleEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/access-policy/${code}/rule/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async accessPolicyDeleteRule({
    code,
    id,
    signature,
  }: {
    /** The Guc of the Access Policy to remove a rule from **/
    code: string;
    /** The AId of the rule to remove **/
    id: string;
    /** The signature is used to ensure that the access policy being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same access policy **/
    signature: string | null;
  }): Promise<AccessPolicyWebModel> {
    const options = this.accessPolicyDeleteRuleApiRequestOptions({
      code,
      id,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public accessPolicyDeleteRuleApiRequestOptions({
    code,
    id,
    signature,
  }: {
    /** The Guc of the Access Policy to remove a rule from **/
    code: string;
    /** The AId of the rule to remove **/
    id: string;
    /** The signature is used to ensure that the access policy being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same access policy **/
    signature: string | null;
  }): ApiRequestOptions {
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
