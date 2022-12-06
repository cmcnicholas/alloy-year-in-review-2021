/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignInterfaceAddDesignInterfaceWebRequestModel } from '../models/DesignInterfaceAddDesignInterfaceWebRequestModel';
import type { DesignInterfaceAttributeCreateWebResponseModel } from '../models/DesignInterfaceAttributeCreateWebResponseModel';
import type { DesignInterfaceCreateWebRequestModel } from '../models/DesignInterfaceCreateWebRequestModel';
import type { DesignInterfaceEditWebRequestModel } from '../models/DesignInterfaceEditWebRequestModel';
import type { DesignInterfaceListWebResponseModel } from '../models/DesignInterfaceListWebResponseModel';
import type { DesignInterfaceWithOperationsSummaryWebResponseModel } from '../models/DesignInterfaceWithOperationsSummaryWebResponseModel';
import type { DesignInterfaceWithPermissionsWebResponseModel } from '../models/DesignInterfaceWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiAttributeCreateWebRequestModel } from '../models/DodiAttributeCreateWebRequestModel';
import type { DodiAttributeEditWebRequestModel } from '../models/DodiAttributeEditWebRequestModel';
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

  public async designInterfaceGet({
    code,
  }: {
    /** The Guc of the interface to fetch **/
    code: string;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceGetApiRequestOptions({
    code,
  }: {
    /** The Guc of the interface to fetch **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design-interface/${code}`,
    };
  }

  public async designInterfaceEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignInterfaceEditWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignInterfaceEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design-interface/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceDelete({
    code,
  }: {
    /** The Guc of the design interface to delete **/
    code: string;
  }): Promise<void> {
    const options = this.designInterfaceDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the design interface to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design-interface/${code}`,
    };
  }

  public async designInterfaceList({
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
  }: {
    /** Optional query to filter the design interfaces by **/
    query?: string | null;
    /** Optional Context to filter the design interfaces by **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implemented by that design or interface will be returned **/
    implementedByDodi?: string | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the interfaces
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter design interfaces by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only interfaces created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against design interfaces without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DesignInterfaceListWebResponseModel> {
    const options = this.designInterfaceListApiRequestOptions({
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
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceListApiRequestOptions({
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
  }: {
    /** Optional query to filter the design interfaces by **/
    query?: string | null;
    /** Optional Context to filter the design interfaces by **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implemented by that design or interface will be returned **/
    implementedByDodi?: string | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the interfaces
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter design interfaces by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only interfaces created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against design interfaces without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async designInterfaceCreate({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignInterfaceCreateWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignInterfaceCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design-interface`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceCreateDesignInterfaceAttribute({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): Promise<DesignInterfaceAttributeCreateWebResponseModel> {
    const options = this.designInterfaceCreateDesignInterfaceAttributeApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceCreateDesignInterfaceAttributeApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design-interface/${code}/attribute`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceEditDesignInterfaceAttribute({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design interface to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceEditDesignInterfaceAttributeApiRequestOptions({
      code,
      attributeCode,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceEditDesignInterfaceAttributeApiRequestOptions({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design interface to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design-interface/${code}/attribute/${attributeCode}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceDeleteDesignInterfaceAttribute({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design interface to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceDeleteDesignInterfaceAttributeApiRequestOptions({
      code,
      attributeCode,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceDeleteDesignInterfaceAttributeApiRequestOptions({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design interface to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design-interface/${code}/attribute/${attributeCode}`,
      query: {
        signature: signature,
      },
    };
  }

  public async designInterfaceAddDesignInterface({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignInterfaceAddDesignInterfaceWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceAddDesignInterfaceApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceAddDesignInterfaceApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignInterfaceAddDesignInterfaceWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design-interface/${code}/interface`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceRemoveDesignInterface({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design interface to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel> {
    const options = this.designInterfaceRemoveDesignInterfaceApiRequestOptions({
      code,
      interfaceCode,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceRemoveDesignInterfaceApiRequestOptions({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design interface to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design-interface/${code}/interface/${interfaceCode}`,
      query: {
        signature: signature,
      },
    };
  }

  public async designInterfaceGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc to use to fetch the required design permissions **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<DodiPermissionsGetWebResponseModel> {
    const options = this.designInterfaceGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc to use to fetch the required design permissions **/
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
      path: `/api/design-interface/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async designInterfaceEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface with the attribute to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): Promise<DesignInterfaceWithPermissionsWebResponseModel> {
    const options = this.designInterfaceEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface with the attribute to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design-interface/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designInterfaceDesignInterfaceAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get interface with attributes access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiAccessAdvisorByUserListWebResponseModel> {
    const options = this.designInterfaceDesignInterfaceAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceDesignInterfaceAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get interface with attributes access advisor for **/
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
      path: `/api/design-interface/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async designInterfaceDesignInterfaceAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get interface with attributes access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiAccessAdvisorByRoleListWebResponseModel> {
    const options = this.designInterfaceDesignInterfaceAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public designInterfaceDesignInterfaceAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get interface with attributes access advisor for **/
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
      path: `/api/design-interface/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
