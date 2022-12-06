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

  public async layerGet({
    code,
  }: {
    /** The Guc for the layer being requested **/
    code: string;
  }): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerGetApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the layer being requested **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}`,
    };
  }

  public async layerEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit **/
    code: string;
    /** Model containing the new layer details **/
    requestBody: LayerEditWebRequestModel;
  }): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerEditApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit **/
    code: string;
    /** Model containing the new layer details **/
    requestBody: LayerEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/layer/${code}`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerDelete({
    code,
  }: {
    /** The Guc of the layer to delete **/
    code: string;
  }): Promise<void> {
    const options = this.layerDeleteApiRequestOptions({
      code,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the layer to delete **/
    code: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/layer/${code}`,
    };
  }

  public async layerList({
    name,
    context,
    andTags,
    orTags,
    notTags,
    userGroup,
    visualisations,
    page,
    pageSize,
  }: {
    /** The optional layer name (full or partial) to filter on **/
    name?: string | null;
    /** The optional layer context to filter on **/
    context?: Context | null;
    /** If this parameter is passed, only the layers with ALL of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    andTags?: Array<string> | null;
    /** If this parameter is passed, only the layers with AT LEAST one of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    orTags?: Array<string> | null;
    /** If this parameter is passed, only the layers with NONE of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    notTags?: Array<string> | null;
    /** Optional Guc to filter layers by. If specified, only the layers
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional layer style visualisations to filter on. If specified, only layers
     * that contain any styles with the given visualisations are returned **/
    visualisations?: Array<LayerVisualisationType> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<LayerListWebResponseModel> {
    const options = this.layerListApiRequestOptions({
      name,
      context,
      andTags,
      orTags,
      notTags,
      userGroup,
      visualisations,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerListApiRequestOptions({
    name,
    context,
    andTags,
    orTags,
    notTags,
    userGroup,
    visualisations,
    page,
    pageSize,
  }: {
    /** The optional layer name (full or partial) to filter on **/
    name?: string | null;
    /** The optional layer context to filter on **/
    context?: Context | null;
    /** If this parameter is passed, only the layers with ALL of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    andTags?: Array<string> | null;
    /** If this parameter is passed, only the layers with AT LEAST one of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    orTags?: Array<string> | null;
    /** If this parameter is passed, only the layers with NONE of the specified tags will be returned
     * It is possible to use this in conjunction with the other tags conditions **/
    notTags?: Array<string> | null;
    /** Optional Guc to filter layers by. If specified, only the layers
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional layer style visualisations to filter on. If specified, only layers
     * that contain any styles with the given visualisations are returned **/
    visualisations?: Array<LayerVisualisationType> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions {
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

  public async layerCreate({
    requestBody,
  }: {
    /** Model containing the new layer details **/
    requestBody: LayerCreateWebRequestModel;
  }): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerCreateApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new layer details **/
    requestBody: LayerCreateWebRequestModel;
  }): ApiRequestOptions {
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

  public async layerResetQuery({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the layer to reset the style for **/
    code: string;
    /** The AId of the style to reset **/
    id: string;
    /** The model containing the information necessary to reset a layer style **/
    requestBody: LayerStyleResetWebRequestModel;
  }): Promise<LayerWithOperationsSummaryWebResponseModel> {
    const options = this.layerResetQueryApiRequestOptions({
      code,
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerResetQueryApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the layer to reset the style for **/
    code: string;
    /** The AId of the style to reset **/
    id: string;
    /** The model containing the information necessary to reset a layer style **/
    requestBody: LayerStyleResetWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/layer/${code}/style/${id}/reset`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerGetNetworkLayerTile({
    code,
    x,
    y,
    z,
    styleIds,
  }: {
    /** The code of the layer to query for **/
    code: string;
    /** The x google tile coordinate **/
    x: number;
    /** The y google tile coordinate **/
    y: number;
    /** The z google tile coordinate **/
    z: number;
    /** The list of style ids to query for. An item will only be returned in one style.
     * The order of the styles specified is thus important since an item belonging to both the first
     * and the last style in the list, will only appear for the first one.
     * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account **/
    styleIds?: Array<string> | null;
  }): Promise<LayerGetNetworkTileWebResponseModel> {
    const options = this.layerGetNetworkLayerTileApiRequestOptions({
      code,
      x,
      y,
      z,
      styleIds,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerGetNetworkLayerTileApiRequestOptions({
    code,
    x,
    y,
    z,
    styleIds,
  }: {
    /** The code of the layer to query for **/
    code: string;
    /** The x google tile coordinate **/
    x: number;
    /** The y google tile coordinate **/
    y: number;
    /** The z google tile coordinate **/
    z: number;
    /** The list of style ids to query for. An item will only be returned in one style.
     * The order of the styles specified is thus important since an item belonging to both the first
     * and the last style in the list, will only appear for the first one.
     * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account **/
    styleIds?: Array<string> | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/${x}/${y}/${z}/network`,
      query: {
        styleIds: styleIds,
      },
    };
  }

  public async layerGetClusterLayerTile({
    code,
    x,
    y,
    z,
    styleIds,
  }: {
    /** The code of the layer to query for **/
    code: string;
    /** The x google tile coordinate **/
    x: number;
    /** The y google tile coordinate **/
    y: number;
    /** The z google tile coordinate **/
    z: number;
    /** The list of style ids to query for.
     * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account **/
    styleIds?: Array<string> | null;
  }): Promise<LayerGetClusterTileWebResponseModel> {
    const options = this.layerGetClusterLayerTileApiRequestOptions({
      code,
      x,
      y,
      z,
      styleIds,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerGetClusterLayerTileApiRequestOptions({
    code,
    x,
    y,
    z,
    styleIds,
  }: {
    /** The code of the layer to query for **/
    code: string;
    /** The x google tile coordinate **/
    x: number;
    /** The y google tile coordinate **/
    y: number;
    /** The z google tile coordinate **/
    z: number;
    /** The list of style ids to query for.
     * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account **/
    styleIds?: Array<string> | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/${x}/${y}/${z}/cluster`,
      query: {
        styleIds: styleIds,
      },
    };
  }

  public async layerGetBasicLayerTile({
    code,
    x,
    y,
    z,
    styleIds,
  }: {
    /** The code of the layer to query for **/
    code: string;
    /** The x google tile coordinate **/
    x: number;
    /** The y google tile coordinate **/
    y: number;
    /** The z google tile coordinate **/
    z: number;
    /** The list of style ids to query for.
     * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account **/
    styleIds?: Array<string> | null;
  }): Promise<LayerGetBasicTileWebResponseModel> {
    const options = this.layerGetBasicLayerTileApiRequestOptions({
      code,
      x,
      y,
      z,
      styleIds,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerGetBasicLayerTileApiRequestOptions({
    code,
    x,
    y,
    z,
    styleIds,
  }: {
    /** The code of the layer to query for **/
    code: string;
    /** The x google tile coordinate **/
    x: number;
    /** The y google tile coordinate **/
    y: number;
    /** The z google tile coordinate **/
    z: number;
    /** The list of style ids to query for.
     * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account **/
    styleIds?: Array<string> | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/layer/${code}/${x}/${y}/${z}/basic`,
      query: {
        styleIds: styleIds,
      },
    };
  }

  public async layerGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the layer whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<LayerPermissionsGetWebResponseModel> {
    const options = this.layerGetPermissionsApiRequestOptions({
      code,
      username,
      role,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the layer whose permissions are being requested **/
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
      path: `/api/layer/${code}/permissions`,
      query: {
        Username: username,
        Role: role,
      },
    };
  }

  public async layerEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: LayerPermissionsEditWebRequestModel;
  }): Promise<LayerWithPermissionsWebResponseModel> {
    const options = this.layerEditPermissionsApiRequestOptions({
      code,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: LayerPermissionsEditWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/layer/${code}/permissions`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async layerLayerAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get layer access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<LayerAccessAdvisorByUserListWebResponseModel> {
    const options = this.layerLayerAccessAdvisorByUserApiRequestOptions({
      username,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerLayerAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get layer access advisor for **/
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
      path: `/api/layer/access-advisor/user/${username}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }

  public async layerLayerAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get layer access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<LayerAccessAdvisorByRoleListWebResponseModel> {
    const options = this.layerLayerAccessAdvisorByRoleApiRequestOptions({
      code,
      query,
      page,
      pageSize,
    });
    const result = await __request(options);
    return result.body;
  }

  public layerLayerAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get layer access advisor for **/
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
      path: `/api/layer/access-advisor/role/${code}`,
      query: {
        Query: query,
        Page: page,
        PageSize: pageSize,
      },
    };
  }
}
