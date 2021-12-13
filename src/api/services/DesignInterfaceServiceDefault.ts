/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignInterfaceListWebResponseModel } from '../models/DesignInterfaceListWebResponseModel';
import type { DesignInterfaceWithOperationsSummaryWebResponseModel } from '../models/DesignInterfaceWithOperationsSummaryWebResponseModel';
import type { DesignInterfaceWithPermissionsWebResponseModel } from '../models/DesignInterfaceWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiPermissionsEditWebRequestModel } from '../models/DodiPermissionsEditWebRequestModel';
import type { DodiPermissionsGetWebResponseModel } from '../models/DodiPermissionsGetWebResponseModel';
import type { DesignInterfaceService } from './DesignInterfaceService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class DesignInterfaceServiceDefault implements DesignInterfaceService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async designInterfaceGet(
    code: string,
  ): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design-interface/${code}`,
    };
  }

  public async designInterfaceList(
    query?: string | null,
    context?: Context | null,
    implementedByDodi?: string | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): Promise<DesignInterfaceListWebResponseModel> {
    const options = this.designInterfaceListApiRequestOptions(
      query,
      context,
      implementedByDodi,
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

  public designInterfaceListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    implementedByDodi?: string | null,
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
      path: `/api/design-interface`,
      query: {
        Query: query,
        Context: context,
        ImplementedByDodi: implementedByDodi,
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

  public async designInterfaceGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<DodiPermissionsGetWebResponseModel> {
    const options = this.designInterfaceGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design-interface/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async designInterfaceEditPermissions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): Promise<DesignInterfaceWithPermissionsWebResponseModel> {
    const options = this.designInterfaceEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceEditPermissionsApiRequestOptions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design-interface/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceDesignInterfaceAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByUserListWebResponseModel> {
    const options = this.designInterfaceDesignInterfaceAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceDesignInterfaceAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design-interface/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async designInterfaceDesignInterfaceAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByRoleListWebResponseModel> {
    const options = this.designInterfaceDesignInterfaceAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceDesignInterfaceAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design-interface/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
