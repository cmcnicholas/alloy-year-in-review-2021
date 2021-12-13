/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignAddDesignInterfaceWebRequestModel } from '../models/DesignAddDesignInterfaceWebRequestModel';
import type { DesignCreateWebRequestModel } from '../models/DesignCreateWebRequestModel';
import type { DesignEditWebRequestModel } from '../models/DesignEditWebRequestModel';
import type { DesignListWebResponseModel } from '../models/DesignListWebResponseModel';
import type { DesignWithOperationsSummaryWebResponseModel } from '../models/DesignWithOperationsSummaryWebResponseModel';
import type { DesignWithPermissionsWebResponseModel } from '../models/DesignWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiAttributeCreateWebRequestModel } from '../models/DodiAttributeCreateWebRequestModel';
import type { DodiAttributeCreateWebResponseModel } from '../models/DodiAttributeCreateWebResponseModel';
import type { DodiAttributeEditWebRequestModel } from '../models/DodiAttributeEditWebRequestModel';
import type { DodiPermissionsEditWebRequestModel } from '../models/DodiPermissionsEditWebRequestModel';
import type { DodiPermissionsGetWebResponseModel } from '../models/DodiPermissionsGetWebResponseModel';
import type { DesignService } from './DesignService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class DesignServiceDefault implements DesignService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async designGet(code: string): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public designGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design/${code}`,
    };
  }

  public async designEdit(
    code: string,
    requestBody: DesignEditWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public designEditApiRequestOptions(
    code: string,
    requestBody: DesignEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designDelete(code: string): Promise<void> {
    const options = this.designDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public designDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design/${code}`,
    };
  }

  public async designList(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): Promise<DesignListWebResponseModel> {
    const options = this.designListApiRequestOptions(
      query,
      context,
      implementsInterface,
      userGroup,
      childDodi,
      lastEditDate,
      queryCompleteDodi,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public designListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design`,
      query: {
        Query: query,
        Context: context,
        ImplementsInterface: implementsInterface,
        UserGroup: userGroup,
        ChildDodi: childDodi,
        LastEditDate: lastEditDate,
        QueryCompleteDodi: queryCompleteDodi,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async designCreate(
    requestBody: DesignCreateWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public designCreateApiRequestOptions(
    requestBody: DesignCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designCreateDesignAttribute(
    code: string,
    requestBody: DodiAttributeCreateWebRequestModel,
  ): Promise<DodiAttributeCreateWebResponseModel> {
    const options = this.designCreateDesignAttributeApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public designCreateDesignAttributeApiRequestOptions(
    code: string,
    requestBody: DodiAttributeCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design/${code}/attribute`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designEditDesignAttribute(
    code: string,
    attributeCode: string,
    requestBody: DodiAttributeEditWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designEditDesignAttributeApiRequestOptions(
      code,
      attributeCode,
      requestBody,
    );
    const result = await __request(options);
    return result.body;
  }

  public designEditDesignAttributeApiRequestOptions(
    code: string,
    attributeCode: string,
    requestBody: DodiAttributeEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design/${code}/attribute/${attributeCode}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designDeleteDesignAttribute(
    code: string,
    attributeCode: string,
    signature?: string | null,
  ): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designDeleteDesignAttributeApiRequestOptions(
      code,
      attributeCode,
      signature,
    );
    const result = await __request(options);
    return result.body;
  }

  public designDeleteDesignAttributeApiRequestOptions(
    code: string,
    attributeCode: string,
    signature?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design/${code}/attribute/${attributeCode}`,
      query: {
        signature: signature,
      },
    };
  }

  public async designAddDesignInterface(
    code: string,
    requestBody: DesignAddDesignInterfaceWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designAddDesignInterfaceApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public designAddDesignInterfaceApiRequestOptions(
    code: string,
    requestBody: DesignAddDesignInterfaceWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design/${code}/interface`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designRemoveDesignInterface(
    code: string,
    interfaceCode: string,
    signature?: string | null,
  ): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designRemoveDesignInterfaceApiRequestOptions(
      code,
      interfaceCode,
      signature,
    );
    const result = await __request(options);
    return result.body;
  }

  public designRemoveDesignInterfaceApiRequestOptions(
    code: string,
    interfaceCode: string,
    signature?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design/${code}/interface/${interfaceCode}`,
      query: {
        signature: signature,
      },
    };
  }

  public async designGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<DodiPermissionsGetWebResponseModel> {
    const options = this.designGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public designGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async designEditPermissions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): Promise<DesignWithPermissionsWebResponseModel> {
    const options = this.designEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public designEditPermissionsApiRequestOptions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designDesignAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByUserListWebResponseModel> {
    const options = this.designDesignAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public designDesignAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async designDesignAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByRoleListWebResponseModel> {
    const options = this.designDesignAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public designDesignAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
