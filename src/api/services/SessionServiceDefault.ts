/* eslint-disable */

import type { CreateSessionFromIdTokenWebRequest } from '../models/CreateSessionFromIdTokenWebRequest';
import type { SessionCreateOAuthUrlWebRequest } from '../models/SessionCreateOAuthUrlWebRequest';
import type { SessionCreateOAuthUrlWebResponse } from '../models/SessionCreateOAuthUrlWebResponse';
import type { SessionCreateWebResponseModel } from '../models/SessionCreateWebResponseModel';
import type { SessionMasterCreateWebRequestModel } from '../models/SessionMasterCreateWebRequestModel';
import type { UserSessionGetWebResponseModel } from '../models/UserSessionGetWebResponseModel';
import type { SessionService } from './SessionService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class SessionServiceDefault implements SessionService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async sessionGet(): Promise<UserSessionGetWebResponseModel> {
    const options = this.sessionGetApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public sessionGetApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/session/me`,
    };
  }

  public async sessionCreate(
    requestBody: SessionMasterCreateWebRequestModel,
  ): Promise<SessionCreateWebResponseModel> {
    const options = this.sessionCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public sessionCreateApiRequestOptions(
    requestBody: SessionMasterCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async sessionDelete(): Promise<void> {
    const options = this.sessionDeleteApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public sessionDeleteApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/session`,
    };
  }

  public async sessionCreate2(customerCode: string): Promise<SessionCreateWebResponseModel> {
    const options = this.sessionCreate2ApiRequestOptions(customerCode);
    const result = await __request(options);
    return result.body;
  }

  public sessionCreate2ApiRequestOptions(customerCode: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session/customer/${customerCode}`,
    };
  }

  public async sessionCreateOAuthUrl(
    requestBody: SessionCreateOAuthUrlWebRequest,
  ): Promise<SessionCreateOAuthUrlWebResponse> {
    const options = this.sessionCreateOAuthUrlApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public sessionCreateOAuthUrlApiRequestOptions(
    requestBody: SessionCreateOAuthUrlWebRequest,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session/oauth`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async sessionCreateSessionFromIdToken(
    requestBody: CreateSessionFromIdTokenWebRequest,
  ): Promise<SessionCreateWebResponseModel> {
    const options = this.sessionCreateSessionFromIdTokenApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public sessionCreateSessionFromIdTokenApiRequestOptions(
    requestBody: CreateSessionFromIdTokenWebRequest,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session/oauth-token-login`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
