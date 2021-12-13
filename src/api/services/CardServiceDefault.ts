/* eslint-disable */

import type { CardAccessAdvisorByRoleListWebResponseModel } from '../models/CardAccessAdvisorByRoleListWebResponseModel';
import type { CardAccessAdvisorByUserListWebResponseModel } from '../models/CardAccessAdvisorByUserListWebResponseModel';
import type { CardCreateWebRequestModel } from '../models/CardCreateWebRequestModel';
import type { CardEditWebRequestModel } from '../models/CardEditWebRequestModel';
import type { CardListWebResponseModel } from '../models/CardListWebResponseModel';
import type { CardPermissionsEditWebRequestModel } from '../models/CardPermissionsEditWebRequestModel';
import type { CardPermissionsGetWebResponseModel } from '../models/CardPermissionsGetWebResponseModel';
import type { CardQueryResetWebRequestModel } from '../models/CardQueryResetWebRequestModel';
import type { CardWithOperationsSummaryWebResponseModel } from '../models/CardWithOperationsSummaryWebResponseModel';
import type { CardWithPermissionsWebResponseModel } from '../models/CardWithPermissionsWebResponseModel';
import type { Context } from '../models/Context';
import type { CardService } from './CardService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class CardServiceDefault implements CardService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async cardGet(code: string): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public cardGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/card/${code}`,
    };
  }

  public async cardEdit(
    code: string,
    requestBody: CardEditWebRequestModel,
  ): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public cardEditApiRequestOptions(
    code: string,
    requestBody: CardEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/card/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardDelete(code: string): Promise<void> {
    const options = this.cardDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public cardDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/card/${code}`,
    };
  }

  public async cardList(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<CardListWebResponseModel> {
    const options = this.cardListApiRequestOptions(query, userGroup, context, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public cardListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/card`,
      query: {
        Query: query,
        UserGroup: userGroup,
        Context: context,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async cardCreate(
    requestBody: CardCreateWebRequestModel,
  ): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public cardCreateApiRequestOptions(requestBody: CardCreateWebRequestModel): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/card`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardResetQuery(
    code: string,
    id: string,
    requestBody: CardQueryResetWebRequestModel,
  ): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardResetQueryApiRequestOptions(code, id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public cardResetQueryApiRequestOptions(
    code: string,
    id: string,
    requestBody: CardQueryResetWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/card/${code}/query/${id}/reset`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<CardPermissionsGetWebResponseModel> {
    const options = this.cardGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public cardGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/card/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async cardEditPermissions(
    code: string,
    requestBody: CardPermissionsEditWebRequestModel,
  ): Promise<CardWithPermissionsWebResponseModel> {
    const options = this.cardEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public cardEditPermissionsApiRequestOptions(
    code: string,
    requestBody: CardPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/card/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardCardAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<CardAccessAdvisorByUserListWebResponseModel> {
    const options = this.cardCardAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public cardCardAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/card/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async cardCardAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<CardAccessAdvisorByRoleListWebResponseModel> {
    const options = this.cardCardAccessAdvisorByRoleApiRequestOptions(code, query, page, pageSize);
    const result = await __request(options);
    return result.body;
  }

  public cardCardAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/card/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
