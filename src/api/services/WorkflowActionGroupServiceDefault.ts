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

  public async workflowActionGroupGet(
    code: string,
  ): Promise<WorkflowActionGroupGetWebResponseModel> {
    const options = this.workflowActionGroupGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/workflow-action-group/${code}`,
    };
  }

  public async workflowActionGroupEdit(
    code: string,
    requestBody: WorkflowActionGroupEditWebRequestModel,
  ): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel> {
    const options = this.workflowActionGroupEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupEditApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow-action-group/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupDelete(code: string): Promise<void> {
    const options = this.workflowActionGroupDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow-action-group/${code}`,
    };
  }

  public async workflowActionGroupList(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    actionGroupInputCode?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowActionGroupListWebResponseModel> {
    const options = this.workflowActionGroupListApiRequestOptions(
      name,
      context,
      userGroup,
      actionGroupInputCode,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupListApiRequestOptions(
    name?: string | null,
    context?: Context | null,
    userGroup?: string | null,
    actionGroupInputCode?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async workflowActionGroupCreate(
    requestBody: WorkflowActionGroupCreateWebRequestModel,
  ): Promise<WorkflowActionGroupWithOperationsSummaryWebResponseModel> {
    const options = this.workflowActionGroupCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupCreateApiRequestOptions(
    requestBody: WorkflowActionGroupCreateWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupGetActionParameters(
    code: string,
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel,
  ): Promise<WorkflowActionGroupGetActionParametersWebResponseModel> {
    const options = this.workflowActionGroupGetActionParametersApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetActionParametersApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupGetActionParametersWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group/${code}/action/parameters`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupGetAllowedActions(
    code: string,
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel,
  ): Promise<WorkflowActionGroupGetAllowedActionsWebResponseModel> {
    const options = this.workflowActionGroupGetAllowedActionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetAllowedActionsApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupGetAllowedActionsWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group/${code}/action/allowed`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupAddAction(
    code: string,
    requestBody: WorkflowActionGroupAddActionWebRequestModel,
  ): Promise<WorkflowActionGroupAddActionWebResponseModel> {
    const options = this.workflowActionGroupAddActionApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupAddActionApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupAddActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/workflow-action-group/${code}/action`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupEditAction(
    code: string,
    id: string,
    requestBody: WorkflowActionGroupEditActionWebRequestModel,
  ): Promise<WorkflowActionGroupEditActionWebResponseModel> {
    const options = this.workflowActionGroupEditActionApiRequestOptions(code, id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupEditActionApiRequestOptions(
    code: string,
    id: string,
    requestBody: WorkflowActionGroupEditActionWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow-action-group/${code}/action/${id}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupRemoveAction(
    code: string,
    id: string,
    signature?: string | null,
  ): Promise<WorkflowActionGroupRemoveActionWebResponseModel> {
    const options = this.workflowActionGroupRemoveActionApiRequestOptions(code, id, signature);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupRemoveActionApiRequestOptions(
    code: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/workflow-action-group/${code}/action/${id}`,
      query: {
        signature: signature,
      },
    };
  }

  public async workflowActionGroupGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<WorkflowActionGroupPermissionsGetWebResponseModel> {
    const options = this.workflowActionGroupGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
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

  public async workflowActionGroupEditPermissions(
    code: string,
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel,
  ): Promise<WorkflowActionGroupWithPermissionsWebResponseModel> {
    const options = this.workflowActionGroupEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupEditPermissionsApiRequestOptions(
    code: string,
    requestBody: WorkflowActionGroupPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/workflow-action-group/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async workflowActionGroupWorkflowActionGroupAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowActionGroupAccessAdvisorByUserListWebResponseModel> {
    const options = this.workflowActionGroupWorkflowActionGroupAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupWorkflowActionGroupAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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

  public async workflowActionGroupWorkflowActionGroupAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<WorkflowActionGroupAccessAdvisorByRoleListWebResponseModel> {
    const options = this.workflowActionGroupWorkflowActionGroupAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public workflowActionGroupWorkflowActionGroupAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
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
