/* eslint-disable */

import type { Context } from '../models/Context';
import type { LayerAccessAdvisorByRoleListWebResponseModel } from '../models/LayerAccessAdvisorByRoleListWebResponseModel';
import type { LayerAccessAdvisorByUserListWebResponseModel } from '../models/LayerAccessAdvisorByUserListWebResponseModel';
import type { LayerCreateWebRequestModel } from '../models/LayerCreateWebRequestModel';
import type { LayerEditWebRequestModel } from '../models/LayerEditWebRequestModel';
import type { LayerGetBasicTileWebResponseModel } from '../models/LayerGetBasicTileWebResponseModel';
import type { LayerGetClusterTileWebResponseModel } from '../models/LayerGetClusterTileWebResponseModel';
import type { LayerGetNetworkTileWebResponseModel } from '../models/LayerGetNetworkTileWebResponseModel';
import type { LayerListWebResponseModel } from '../models/LayerListWebResponseModel';
import type { LayerPermissionsEditWebRequestModel } from '../models/LayerPermissionsEditWebRequestModel';
import type { LayerPermissionsGetWebResponseModel } from '../models/LayerPermissionsGetWebResponseModel';
import type { LayerStyleResetWebRequestModel } from '../models/LayerStyleResetWebRequestModel';
import type { LayerTagsListWebResponseModel } from '../models/LayerTagsListWebResponseModel';
import type { LayerVisualisationType } from '../models/LayerVisualisationType';
import type { LayerWithOperationsSummaryWebResponseModel } from '../models/LayerWithOperationsSummaryWebResponseModel';
import type { LayerWithPermissionsWebResponseModel } from '../models/LayerWithPermissionsWebResponseModel';
import type { LayerService } from './LayerService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class LayerServiceDefault implements LayerService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async layerGet(code: string): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerGetApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public layerGetApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}`,
    };
  }

  public async layerEdit(
    code: string,
    requestBody: LayerEditWebRequestModel,
  ): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerEditApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public layerEditApiRequestOptions(
    code: string,
    requestBody: LayerEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/layer/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerDelete(code: string): Promise<void> {
    const options = this.layerDeleteApiRequestOptions(code);
    const result = await __request(options);
    return result.body;
  }

  public layerDeleteApiRequestOptions(code: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/layer/${code}`,
    };
  }

  public async layerList(
    name?: string | null,
    context?: Context | null,
    andTags?: Array<string> | null,
    orTags?: Array<string> | null,
    notTags?: Array<string> | null,
    userGroup?: string | null,
    visualisations?: Array<LayerVisualisationType> | null,
    page?: number,
    pageSize?: number,
  ): Promise<LayerListWebResponseModel> {
    const options = this.layerListApiRequestOptions(
      name,
      context,
      andTags,
      orTags,
      notTags,
      userGroup,
      visualisations,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public layerListApiRequestOptions(
    name?: string | null,
    context?: Context | null,
    andTags?: Array<string> | null,
    orTags?: Array<string> | null,
    notTags?: Array<string> | null,
    userGroup?: string | null,
    visualisations?: Array<LayerVisualisationType> | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer`,
      query: {
        Name: name,
        Context: context,
        AndTags: andTags,
        OrTags: orTags,
        NotTags: notTags,
        UserGroup: userGroup,
        Visualisations: visualisations,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async layerCreate(
    requestBody: LayerCreateWebRequestModel,
  ): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerCreateApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public layerCreateApiRequestOptions(requestBody: LayerCreateWebRequestModel): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/layer`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerListTags(): Promise<LayerTagsListWebResponseModel> {
    const options = this.layerListTagsApiRequestOptions();
    const result = await __request(options);
    return result.body;
  }

  public layerListTagsApiRequestOptions(): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/tags`,
    };
  }

  public async layerResetQuery(
    code: string,
    id: string,
    requestBody: LayerStyleResetWebRequestModel,
  ): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerResetQueryApiRequestOptions(code, id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public layerResetQueryApiRequestOptions(
    code: string,
    id: string,
    requestBody: LayerStyleResetWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/layer/${code}/style/${id}/reset`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerGetNetworkLayerTile(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): Promise<LayerGetNetworkTileWebResponseModel> {
    const options = this.layerGetNetworkLayerTileApiRequestOptions(code, x, y, z, styleIds);
    const result = await __request(options);
    return result.body;
  }

  public layerGetNetworkLayerTileApiRequestOptions(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/${x}/${y}/${z}/network`,
      query: {
        styleIds: styleIds,
      },
    };
  }

  public async layerGetClusterLayerTile(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): Promise<LayerGetClusterTileWebResponseModel> {
    const options = this.layerGetClusterLayerTileApiRequestOptions(code, x, y, z, styleIds);
    const result = await __request(options);
    return result.body;
  }

  public layerGetClusterLayerTileApiRequestOptions(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/${x}/${y}/${z}/cluster`,
      query: {
        styleIds: styleIds,
      },
    };
  }

  public async layerGetBasicLayerTile(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): Promise<LayerGetBasicTileWebResponseModel> {
    const options = this.layerGetBasicLayerTileApiRequestOptions(code, x, y, z, styleIds);
    const result = await __request(options);
    return result.body;
  }

  public layerGetBasicLayerTileApiRequestOptions(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/${x}/${y}/${z}/basic`,
      query: {
        styleIds: styleIds,
      },
    };
  }

  public async layerGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<LayerPermissionsGetWebResponseModel> {
    const options = this.layerGetPermissionsApiRequestOptions(code, username, role);
    const result = await __request(options);
    return result.body;
  }

  public layerGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async layerEditPermissions(
    code: string,
    requestBody: LayerPermissionsEditWebRequestModel,
  ): Promise<LayerWithPermissionsWebResponseModel> {
    const options = this.layerEditPermissionsApiRequestOptions(code, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public layerEditPermissionsApiRequestOptions(
    code: string,
    requestBody: LayerPermissionsEditWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/layer/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerLayerAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<LayerAccessAdvisorByUserListWebResponseModel> {
    const options = this.layerLayerAccessAdvisorByUserApiRequestOptions(
      username,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public layerLayerAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async layerLayerAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<LayerAccessAdvisorByRoleListWebResponseModel> {
    const options = this.layerLayerAccessAdvisorByRoleApiRequestOptions(
      code,
      query,
      page,
      pageSize,
    );
    const result = await __request(options);
    return result.body;
  }

  public layerLayerAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
