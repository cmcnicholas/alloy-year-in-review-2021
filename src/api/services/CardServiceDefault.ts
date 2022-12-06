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

  public async cardGet({
    code,
  }: {
    /** The Guc for the card being requested **/
    code: string;
  }): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the card being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/card/${code}`,
    };
  }

  public async cardEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit **/
    code: string;
    /** Model containing the new card details **/
    requestBody: CardEditWebRequestModel;
  }): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit **/
    code: string;
    /** Model containing the new card details **/
    requestBody: CardEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/card/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardDelete({
    code,
  }: {
    /** The Guc of the card to delete **/
    code: string;
  }): Promise<void> {
    const options = this.cardDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the card to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/card/${code}`,
    };
  }

  public async cardList({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the cards by **/
    query?: string | null;
    /** Optional Guc to filter cards by. If specified, only the cards
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional cards context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CardListWebResponseModel> {
    const options = this.cardListApiRequestOptions({
      query,
      userGroup,
      context,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardListApiRequestOptions({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the cards by **/
    query?: string | null;
    /** Optional Guc to filter cards by. If specified, only the cards
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional cards context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async cardCreate({
    requestBody,
  }: {
    /** Model containing the new card details **/
    requestBody: CardCreateWebRequestModel;
  }): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new card details **/
    requestBody: CardCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/card`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardResetQuery({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the card to reset the query for **/
    code: string;
    /** The AId of the query to reset **/
    id: string;
    /** The model containing the information necessary to reset a card query **/
    requestBody: CardQueryResetWebRequestModel;
  }): Promise<CardWithOperationsSummaryWebResponseModel> {
    const options = this.cardResetQueryApiRequestOptions({
      code,
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardResetQueryApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the card to reset the query for **/
    code: string;
    /** The AId of the query to reset **/
    id: string;
    /** The model containing the information necessary to reset a card query **/
    requestBody: CardQueryResetWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/card/${code}/query/${id}/reset`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the card whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<CardPermissionsGetWebResponseModel> {
    const options = this.cardGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the card whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions {
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

  public async cardEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: CardPermissionsEditWebRequestModel;
  }): Promise<CardWithPermissionsWebResponseModel> {
    const options = this.cardEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: CardPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/card/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async cardCardAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get card access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CardAccessAdvisorByUserListWebResponseModel> {
    const options = this.cardCardAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardCardAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get card access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async cardCardAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get card access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CardAccessAdvisorByRoleListWebResponseModel> {
    const options = this.cardCardAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public cardCardAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get card access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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
