/* eslint-disable */

import type { Context } from '../models/Context';
import type { WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel } from '../models/WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel';
import type { WorkflowActionGroupAccessAdvisorByUserListWebResponseModel } from '../models/WorkflowActionGroupAccessAdvisorByUserListWebResponseModel';
import type { WorkflowActionGroupAddActionWebRequestModel } from '../models/WorkflowActionGroupAddActionWebRequestModel';
import type { WorkflowActionGroupAddActionWebResponseModel } from '../models/WorkflowActionGroupAddActionWebResponseModel';
import type { WorkflowActionGroupCreateWebRequestModel } from '../models/WorkflowActionGroupCreateWebRequestModel';
import type { WorkflowActionGroupEditActionWebRequestModel } from '../models/WorkflowActionGroupEditActionWebRequestModel';
import type { WorkflowActionGroupEditActionWebResponseModel } from '../models/WorkflowActionGroupEditActionWebResponseModel';
import type { WorkflowActionGroupEditWebRequestModel } from '../models/WorkflowActionGroupEditWebRequestModel';
import type { WorkflowActionGroupGetActionParametersWebRequestModel } from '../models/WorkflowActionGroupGetActionParametersWebRequestModel';
import type { WorkflowActionGroupGetActionParametersWebResponseModel } from '../models/WorkflowActionGroupGetActionParametersWebResponseModel';
import type { WorkflowActionGroupGetAllowedActionsWebRequestModel } from '../models/WorkflowActionGroupGetAllowedActionsWebRequestModel';
import type { WorkflowActionGroupGetAllowedActionsWebResponseModel } from '../models/WorkflowActionGroupGetAllowedActionsWebResponseModel';
import type { WorkflowActionGroupGetWebResponseModel } from '../models/WorkflowActionGroupGetWebResponseModel';
import type { WorkflowActionGroupListWebResponseModel } from '../models/WorkflowActionGroupListWebResponseModel';
import type { WorkflowActionGroupPermissionsEditWebRequestModel } from '../models/WorkflowActionGroupPermissionsEditWebRequestModel';
import type { WorkflowActionGroupPermissionsGetWebResponseModel } from '../models/WorkflowActionGroupPermissionsGetWebResponseModel';
import type { WorkflowActionGroupRemoveActionWebResponseModel } from '../models/WorkflowActionGroupRemoveActionWebResponseModel';
import type { WorkflowActionGroupWithOperationsSummaryWebResponseModel } from '../models/WorkflowActionGroupWithOperationsSummaryWebResponseModel';
import type { WorkflowActionGroupWithPermissionsWebResponseModel } from '../models/WorkflowActionGroupWithPermissionsWebResponseModel';
import type { WorkflowActionGroupService } from './WorkflowActionGroupService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class WorkflowActionGroupServiceDefault implements WorkflowActionGroupService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async workflowActionGroupGet({
    code,
  }: {
    /** The Guc of the workflowActionGroup to retrieve **/
    code: string;
  }): Promise<WorkflowActionGroupGetWebResponseModel> {
    const options = this.workflowActionGroupGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetApiRequestOptions({
    code,
  }: {
    /** The Guc of the workflowActionGroup to retrieve **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow-action-group/${code}`,
    };
  }

  public async workflowActionGroupEdit({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowActionGroupEditWebRequestModel;
  }): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel> {
    const options = this.workflowActionGroupEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit **/
    code: string;
    /** The model containing all the edit operation details **/
    requestBody: WorkflowActionGroupEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow-action-group/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupDelete({
    code,
  }: {
    /** The code of the workflowActionGroup to delete **/
    code: string;
  }): Promise<void> {
    const options = this.workflowActionGroupDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupDeleteApiRequestOptions({
    code,
  }: {
    /** The code of the workflowActionGroup to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow-action-group/${code}`,
    };
  }

  public async workflowActionGroupList({
    name,
    context,
    userGroup,
    actionGroupInputCode,
    page,
    pageSize,
  }: {
    /** The optional workflow Action Group name (full or partial) to filter on **/
    name?: string | null;
    /** The optional workflow Action Group context to filter on **/
    context?: Context | null;
    /** Optional Guc to filter workflow Action Groups by. If specified, only the workflow action groups
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter workflow action groups by. If specified, only the workflow action groups
     * that have this dodi code as their declared input type are returned **/
    actionGroupInputCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowActionGroupListWebResponseModel> {
    const options = this.workflowActionGroupListApiRequestOptions({
      name,
      context,
      userGroup,
      actionGroupInputCode,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupListApiRequestOptions({
    name,
    context,
    userGroup,
    actionGroupInputCode,
    page,
    pageSize,
  }: {
    /** The optional workflow Action Group name (full or partial) to filter on **/
    name?: string | null;
    /** The optional workflow Action Group context to filter on **/
    context?: Context | null;
    /** Optional Guc to filter workflow Action Groups by. If specified, only the workflow action groups
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter workflow action groups by. If specified, only the workflow action groups
     * that have this dodi code as their declared input type are returned **/
    actionGroupInputCode?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow-action-group`,
      query: {
        Name: name,
        Context: context,
        UserGroup: userGroup,
        ActionGroupInputCode: actionGroupInputCode,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowActionGroupCreate({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowActionGroupCreateWebRequestModel;
  }): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel> {
    const options = this.workflowActionGroupCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create operation details **/
    requestBody: WorkflowActionGroupCreateWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupGetActionParameters({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel;
  }): Promise<WorkflowActionGroupGetActionParametersWebResponseModel> {
    const options = this.workflowActionGroupGetActionParametersApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetActionParametersApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get parameters request **/
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group/${code}/action/parameters`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupGetAllowedActions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel;
  }): Promise<WorkflowActionGroupGetAllowedActionsWebResponseModel> {
    const options = this.workflowActionGroupGetAllowedActionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetAllowedActionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup being queried **/
    code: string;
    /** Model containing the details of the get allowed actions request **/
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group/${code}/action/allowed`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupAddAction({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowActionGroupAddActionWebRequestModel;
  }): Promise<WorkflowActionGroupAddActionWebResponseModel> {
    const options = this.workflowActionGroupAddActionApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupAddActionApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to add the action to **/
    code: string;
    /** The model containing all the add action operation details **/
    requestBody: WorkflowActionGroupAddActionWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group/${code}/action`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupEditAction({
    code,
    id,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit the action on **/
    code: string;
    /** The id of the action to edit **/
    id: string;
    /** The model containing all the edit action operation details **/
    requestBody: WorkflowActionGroupEditActionWebRequestModel;
  }): Promise<WorkflowActionGroupEditActionWebResponseModel> {
    const options = this.workflowActionGroupEditActionApiRequestOptions({
      code,
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupEditActionApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The code of the workflowActionGroup to edit the action on **/
    code: string;
    /** The id of the action to edit **/
    id: string;
    /** The model containing all the edit action operation details **/
    requestBody: WorkflowActionGroupEditActionWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow-action-group/${code}/action/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupRemoveAction({
    code,
    id,
    signature,
  }: {
    /** The code of the workflowActionGroup to remove the action from **/
    code: string;
    /** The id of the action to remove **/
    id: string;
    /** The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group **/
    signature: string | null;
  }): Promise<WorkflowActionGroupRemoveActionWebResponseModel> {
    const options = this.workflowActionGroupRemoveActionApiRequestOptions({
      code,
      id,
      signature,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupRemoveActionApiRequestOptions({
    code,
    id,
    signature,
  }: {
    /** The code of the workflowActionGroup to remove the action from **/
    code: string;
    /** The id of the action to remove **/
    id: string;
    /** The signature is used to ensure that the workflow action group being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same workflow action group **/
    signature: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow-action-group/${code}/action/${id}`,
      query: {
        signature: signature,
      },
    };
  }

  public async workflowActionGroupGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the workflowActionGroup whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<WorkflowActionGroupPermissionsGetWebResponseModel> {
    const options = this.workflowActionGroupGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the workflowActionGroup whose permissions are being requested **/
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
      path: `/api/workflow-action-group/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async workflowActionGroupEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflowActionGroup to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel;
  }): Promise<WorkflowActionGroupWithPermissionsWebResponseModel> {
    const options = this.workflowActionGroupEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the workflowActionGroup to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow-action-group/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupWorkflowActionGroupAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get workflowActionGroup access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowActionGroupAccessAdvisorByUserListWebResponseModel> {
    const options = this.workflowActionGroupWorkflowActionGroupAccessAdvisorByUserApiRequestOptions(
      {
        username,
        query,
        page,
        pageSize,
      },
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupWorkflowActionGroupAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get workflowActionGroup access advisor for **/
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
      path: `/api/workflow-action-group/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async workflowActionGroupWorkflowActionGroupAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get workflowActionGroup access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel> {
    const options = this.workflowActionGroupWorkflowActionGroupAccessAdvisorByRoleApiRequestOptions(
      {
        code,
        query,
        page,
        pageSize,
      },
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupWorkflowActionGroupAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get workflowActionGroup access advisor for **/
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
      path: `/api/workflow-action-group/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
