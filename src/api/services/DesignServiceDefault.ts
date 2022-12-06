/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignAddDesignInterfaceWebRequestModel } from '../models/DesignAddDesignInterfaceWebRequestModel';
import type { DesignAttributeCreateWebResponseModel } from '../models/DesignAttributeCreateWebResponseModel';
import type { DesignCreateWebRequestModel } from '../models/DesignCreateWebRequestModel';
import type { DesignEditWebRequestModel } from '../models/DesignEditWebRequestModel';
import type { DesignListWebResponseModel } from '../models/DesignListWebResponseModel';
import type { DesignWithOperationsSummaryWebResponseModel } from '../models/DesignWithOperationsSummaryWebResponseModel';
import type { DesignWithPermissionsWebResponseModel } from '../models/DesignWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiAttributeCreateWebRequestModel } from '../models/DodiAttributeCreateWebRequestModel';
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

  public async designGet({
    code,
  }: {
    /** The Guc to use to fetch the required design **/
    code: string;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public designGetApiRequestOptions({
    code,
  }: {
    /** The Guc to use to fetch the required design **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/design/${code}`,
    };
  }

  public async designEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignEditWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designDelete({
    code,
  }: {
    /** The Guc of the design to delete **/
    code: string;
  }): Promise<void> {
    const options = this.designDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public designDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the design to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design/${code}`,
    };
  }

  public async designList({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the designs by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only designs created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against designs without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DesignListWebResponseModel> {
    const options = this.designListApiRequestOptions({
      query,
      context,
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

  public designListApiRequestOptions({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the designs by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only designs created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against designs without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async designCreate({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignCreateWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designCreateDesignAttribute({
    code,
    requestBody,
  }: {
    /** The Guc of the design to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): Promise<DesignAttributeCreateWebResponseModel> {
    const options = this.designCreateDesignAttributeApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designCreateDesignAttributeApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design/${code}/attribute`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designEditDesignAttribute({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designEditDesignAttributeApiRequestOptions({
      code,
      attributeCode,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designEditDesignAttributeApiRequestOptions({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design/${code}/attribute/${attributeCode}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designDeleteDesignAttribute({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designDeleteDesignAttributeApiRequestOptions({
      code,
      attributeCode,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public designDeleteDesignAttributeApiRequestOptions({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design/${code}/attribute/${attributeCode}`,
      query: {
        signature: signature,
      },
    };
  }

  public async designAddDesignInterface({
    code,
    requestBody,
  }: {
    /** The Guc of the design to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignAddDesignInterfaceWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designAddDesignInterfaceApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designAddDesignInterfaceApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignAddDesignInterfaceWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/design/${code}/interface`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designRemoveDesignInterface({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): Promise<DesignWithOperationsSummaryWebResponseModel> {
    const options = this.designRemoveDesignInterfaceApiRequestOptions({
      code,
      interfaceCode,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public designRemoveDesignInterfaceApiRequestOptions({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/design/${code}/interface/${interfaceCode}`,
      query: {
        signature: signature,
      },
    };
  }

  public async designGetPermissions({
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
    const options = this.designGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public designGetPermissionsApiRequestOptions({
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
      path: `/api/design/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async designEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): Promise<DesignWithPermissionsWebResponseModel> {
    const options = this.designEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public designEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/design/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async designDesignAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get design with attributes access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiAccessAdvisorByUserListWebResponseModel> {
    const options = this.designDesignAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public designDesignAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get design with attributes access advisor for **/
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
      path: `/api/design/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async designDesignAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get design with attributes access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiAccessAdvisorByRoleListWebResponseModel> {
    const options = this.designDesignAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public designDesignAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get design with attributes access advisor for **/
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
      path: `/api/design/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
