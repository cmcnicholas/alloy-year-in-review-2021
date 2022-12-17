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

  public async sessionCreate({
    requestBody,
  }: {
    /** The model containing the information about the master session to be created **/
    requestBody: SessionMasterCreateWebRequestModel;
  }): Promise<SessionCreateWebResponseModel> {
    const options = this.sessionCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public sessionCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing the information about the master session to be created **/
    requestBody: SessionMasterCreateWebRequestModel;
  }): ApiRequestOptions {
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

  public async sessionCreate2({
    customerCode,
  }: {
    /** The Guc of the customer to log into **/
    customerCode: string;
  }): Promise<SessionCreateWebResponseModel> {
    const options = this.sessionCreate2ApiRequestOptions({
      customerCode,
    });
    const result = await __request(options);
    return result.body;
  }

  public sessionCreate2ApiRequestOptions({
    customerCode,
  }: {
    /** The Guc of the customer to log into **/
    customerCode: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session/customer/${customerCode}`,
    };
  }

  public async sessionCreateOAuthUrl({
    requestBody,
  }: {
    /** The model gives the OAuth provider and the success and failure URLs **/
    requestBody: SessionCreateOAuthUrlWebRequest;
  }): Promise<SessionCreateOAuthUrlWebResponse> {
    const options = this.sessionCreateOAuthUrlApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public sessionCreateOAuthUrlApiRequestOptions({
    requestBody,
  }: {
    /** The model gives the OAuth provider and the success and failure URLs **/
    requestBody: SessionCreateOAuthUrlWebRequest;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session/oauth`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async sessionCreateSessionFromIdToken({
    requestBody,
  }: {
    /** The model giving the OAuth provider and the id token **/
    requestBody: CreateSessionFromIdTokenWebRequest;
  }): Promise<SessionCreateWebResponseModel> {
    const options = this.sessionCreateSessionFromIdTokenApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public sessionCreateSessionFromIdTokenApiRequestOptions({
    requestBody,
  }: {
    /** The model giving the OAuth provider and the id token **/
    requestBody: CreateSessionFromIdTokenWebRequest;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/session/oauth-token-login`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }
}
