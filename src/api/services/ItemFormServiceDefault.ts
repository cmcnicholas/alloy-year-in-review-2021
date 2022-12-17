/* eslint-disable */

import type { Context } from '../models/Context';
import type { ItemFormAccessAdvisorByRoleListWebResponseModel } from '../models/ItemFormAccessAdvisorByRoleListWebResponseModel';
import type { ItemFormAccessAdvisorByUserListWebResponseModel } from '../models/ItemFormAccessAdvisorByUserListWebResponseModel';
import type { ItemFormAction } from '../models/ItemFormAction';
import type { ItemFormCreateWebRequestModel } from '../models/ItemFormCreateWebRequestModel';
import type { ItemFormEditWebRequestModel } from '../models/ItemFormEditWebRequestModel';
import type { ItemFormListWebResponseModel } from '../models/ItemFormListWebResponseModel';
import type { ItemFormPermissionsEditWebRequestModel } from '../models/ItemFormPermissionsEditWebRequestModel';
import type { ItemFormPermissionsGetWebResponseModel } from '../models/ItemFormPermissionsGetWebResponseModel';
import type { ItemFormWithOperationsSummaryWebResponseModel } from '../models/ItemFormWithOperationsSummaryWebResponseModel';
import type { ItemFormWithPermissionsWebResponseModel } from '../models/ItemFormWithPermissionsWebResponseModel';
import type { ItemFormService } from './ItemFormService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class ItemFormServiceDefault implements ItemFormService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async itemFormGet({
    code,
  }: {
    /** The Guc for the item form being requested **/
    code: string;
  }): Promise<ItemFormWithOperationsSummaryWebResponseModel> {
    const options = this.itemFormGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the item form being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-form/${code}`,
    };
  }

  public async itemFormEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit **/
    code: string;
    /** Model containing the new item form details **/
    requestBody: ItemFormEditWebRequestModel;
  }): Promise<ItemFormWithOperationsSummaryWebResponseModel> {
    const options = this.itemFormEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit **/
    code: string;
    /** Model containing the new item form details **/
    requestBody: ItemFormEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/item-form/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemFormDelete({
    code,
  }: {
    /** The Guc of the item form to delete **/
    code: string;
  }): Promise<void> {
    const options = this.itemFormDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the item form to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/item-form/${code}`,
    };
  }

  public async itemFormList({
    query,
    dodiCode,
    tags,
    actions,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the item forms by **/
    query?: string | null;
    /** Optional dodi code to filter the item forms by **/
    dodiCode?: string | null;
    /** The optional item form tags to filter on. If specified, only the item forms with at least one of the specified tags will be returned **/
    tags?: Array<string> | null;
    /** The optional item form actions to filter on. If specified, only the item forms with at least one of the specified actions will be returned **/
    actions?: Array<ItemFormAction> | null;
    /** Optional Guc to filter item forms by. If specified, only the item forms
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional item forms context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemFormListWebResponseModel> {
    const options = this.itemFormListApiRequestOptions({
      query,
      dodiCode,
      tags,
      actions,
      userGroup,
      context,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormListApiRequestOptions({
    query,
    dodiCode,
    tags,
    actions,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the item forms by **/
    query?: string | null;
    /** Optional dodi code to filter the item forms by **/
    dodiCode?: string | null;
    /** The optional item form tags to filter on. If specified, only the item forms with at least one of the specified tags will be returned **/
    tags?: Array<string> | null;
    /** The optional item form actions to filter on. If specified, only the item forms with at least one of the specified actions will be returned **/
    actions?: Array<ItemFormAction> | null;
    /** Optional Guc to filter item forms by. If specified, only the item forms
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional item forms context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-form`,
      query: {
        Query: query,
        DodiCode: dodiCode,
        Tags: tags,
        Actions: actions,
        UserGroup: userGroup,
        Context: context,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async itemFormCreate({
    requestBody,
  }: {
    /** Model containing the new item form details **/
    requestBody: ItemFormCreateWebRequestModel;
  }): Promise<ItemFormWithOperationsSummaryWebResponseModel> {
    const options = this.itemFormCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new item form details **/
    requestBody: ItemFormCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item-form`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemFormGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the item form whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<ItemFormPermissionsGetWebResponseModel> {
    const options = this.itemFormGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the item form whose permissions are being requested **/
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
      path: `/api/item-form/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async itemFormEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: ItemFormPermissionsEditWebRequestModel;
  }): Promise<ItemFormWithPermissionsWebResponseModel> {
    const options = this.itemFormEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: ItemFormPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/item-form/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemFormItemFormAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get item form access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemFormAccessAdvisorByUserListWebResponseModel> {
    const options = this.itemFormItemFormAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormItemFormAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get item form access advisor for **/
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
      path: `/api/item-form/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async itemFormItemFormAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get item form access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemFormAccessAdvisorByRoleListWebResponseModel> {
    const options = this.itemFormItemFormAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public itemFormItemFormAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get item form access advisor for **/
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
      path: `/api/item-form/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
