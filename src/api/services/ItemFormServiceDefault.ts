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

  public async itemFormGet(code: string): Promise<ItemFormWithOperationsSummaryWebResponseModel> {
    const options = this.itemFormGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public itemFormGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/item-form/${code}`,
    };
  }

  public async itemFormEdit(
    code: string,
    requestBody: ItemFormEditWebRequestModel,
  ): Promise<ItemFormWithOperationsSummaryWebResponseModel> {
    const options = this.itemFormEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemFormEditApiRequestOptions(
    code: string,
    requestBody: ItemFormEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/item-form/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemFormDelete(code: string): Promise<void> {
    const options = this.itemFormDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public itemFormDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/item-form/${code}`,
    };
  }

  public async itemFormList(
    query?: string | null,
    dodiCode?: string | null,
    tags?: Array<string> | null,
    actions?: Array<ItemFormAction> | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemFormListWebResponseModel> {
    const options = this.itemFormListApiRequestOptions(
      query,
      dodiCode,
      tags,
      actions,
      userGroup,
      context,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public itemFormListApiRequestOptions(
    query?: string | null,
    dodiCode?: string | null,
    tags?: Array<string> | null,
    actions?: Array<ItemFormAction> | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async itemFormCreate(
    requestBody: ItemFormCreateWebRequestModel,
  ): Promise<ItemFormWithOperationsSummaryWebResponseModel> {
    const options = this.itemFormCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemFormCreateApiRequestOptions(
    requestBody: ItemFormCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/item-form`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemFormGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<ItemFormPermissionsGetWebResponseModel> {
    const options = this.itemFormGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public itemFormGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
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

  public async itemFormEditPermissions(
    code: string,
    requestBody: ItemFormPermissionsEditWebRequestModel,
  ): Promise<ItemFormWithPermissionsWebResponseModel> {
    const options = this.itemFormEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public itemFormEditPermissionsApiRequestOptions(
    code: string,
    requestBody: ItemFormPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/item-form/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async itemFormItemFormAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemFormAccessAdvisorByUserListWebResponseModel> {
    const options = this.itemFormItemFormAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public itemFormItemFormAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async itemFormItemFormAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemFormAccessAdvisorByRoleListWebResponseModel> {
    const options = this.itemFormItemFormAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public itemFormItemFormAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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
