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
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface LayerService {
  /**
   * Get a layer by its code
   * Fetches a layer by its globally unique code (GUC).
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerGet({
    code,
  }: {
    /** The Guc for the layer being requested **/
    code: string;
  }): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a layer by its code
   * Fetches a layer by its globally unique code (GUC).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the layer being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a layer
   * Edits a layer based on the information sent in the model
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit **/
    code: string;
    /** Model containing the new layer details **/
    requestBody: LayerEditWebRequestModel;
  }): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a layer
   * Edits a layer based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit **/
    code: string;
    /** Model containing the new layer details **/
    requestBody: LayerEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a layer
   * Deletes a layer based on the information sent in the model
   * @returns void
   */
  layerDelete({
    code,
  }: {
    /** The Guc of the layer to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a layer
   * Deletes a layer based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the layer to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Get a list of layers allowing to filter by some optional query parameters
   * Fetches a list of layers optionally specifying page and the number of results to return per page.
   * @returns LayerListWebResponseModel
   */
  layerList({
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
  }): Promise<LayerListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of layers allowing to filter by some optional query parameters
   * Fetches a list of layers optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerListApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Create a layer
   * Creates a layer based on the information sent in the model
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerCreate({
    requestBody,
  }: {
    /** Model containing the new layer details **/
    requestBody: LayerCreateWebRequestModel;
  }): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a layer
   * Creates a layer based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new layer details **/
    requestBody: LayerCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get the list of the layer tags in the system
   * Fetches all of the layer tags in the system
   * @returns LayerTagsListWebResponseModel
   */
  layerListTags(): Promise<LayerTagsListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the list of the layer tags in the system
   * Fetches all of the layer tags in the system
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerListTagsApiRequestOptions(): ApiRequestOptions;

  /**
   * Reset a layer style
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerResetQuery({
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
  }): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Reset a layer style
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerResetQueryApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Get a network tile for a layer
   * This endpoint allows to query a layer returning network layer items to be displayed on the map.
   * The tiles returned are GeoJson features containing two types of properties.
   * If the tile contains simplified network geometry, then the following properties are returned:
   * * type: A string whose value is "SimplifiedGeometry"
   * * styleId: The id of the style that originated this feature
   * If the tile contains network items, then the following properties are returned for each item:
   * * type: A string whose value is "Item"
   * * styleId: The id of the style that originated this feature
   * * designCode: The code of the design the item belongs to
   * * itemId: The item id
   * * title: The item title
   * * subtitle: The item subtitle
   * * z: The original zoom level that this feature was created for
   * @returns LayerGetNetworkTileWebResponseModel
   */
  layerGetNetworkLayerTile({
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
  }): Promise<LayerGetNetworkTileWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a network tile for a layer
   * This endpoint allows to query a layer returning network layer items to be displayed on the map.
   * The tiles returned are GeoJson features containing two types of properties.
   * If the tile contains simplified network geometry, then the following properties are returned:
   * * type: A string whose value is "SimplifiedGeometry"
   * * styleId: The id of the style that originated this feature
   * If the tile contains network items, then the following properties are returned for each item:
   * * type: A string whose value is "Item"
   * * styleId: The id of the style that originated this feature
   * * designCode: The code of the design the item belongs to
   * * itemId: The item id
   * * title: The item title
   * * subtitle: The item subtitle
   * * z: The original zoom level that this feature was created for
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetNetworkLayerTileApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Get a cluster tile for a layer
   * This endpoint allows to query a layer returning information in a clustered format to be displayed on the map.
   * No results are returned for zoom levels greater than 16.
   * Only items are returned at zoom level 16, not clusters.
   * At zoom levels 15 and lower, clusters will be returned.
   *
   * The tiles returned are GeoJson features containing two types of properties.
   * When returning clusters the following properties are returned:
   * * type: A string whose value is "Cluster"
   * * styleId: The id of the style that originated this feature
   * * count: The number of items in this cluster/feature
   * * bbox: The bounding box containing the items in this cluster
   *
   * When returning items the following properties are returned:
   * * type: A string whose value is "Item"
   * * styleId: The id of the style that originated this feature
   * * designCode: The code of the design the item belongs to
   * * itemId: The item id
   * * colour: The item colour
   * * icon: The item icon code
   * @returns LayerGetClusterTileWebResponseModel
   */
  layerGetClusterLayerTile({
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
  }): Promise<LayerGetClusterTileWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a cluster tile for a layer
   * This endpoint allows to query a layer returning information in a clustered format to be displayed on the map.
   * No results are returned for zoom levels greater than 16.
   * Only items are returned at zoom level 16, not clusters.
   * At zoom levels 15 and lower, clusters will be returned.
   *
   * The tiles returned are GeoJson features containing two types of properties.
   * When returning clusters the following properties are returned:
   * * type: A string whose value is "Cluster"
   * * styleId: The id of the style that originated this feature
   * * count: The number of items in this cluster/feature
   * * bbox: The bounding box containing the items in this cluster
   *
   * When returning items the following properties are returned:
   * * type: A string whose value is "Item"
   * * styleId: The id of the style that originated this feature
   * * designCode: The code of the design the item belongs to
   * * itemId: The item id
   * * colour: The item colour
   * * icon: The item icon code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetClusterLayerTileApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Get a basic tile for a layer
   * This endpoint allows to query a layer returning big items to be displayed on the map.
   * Only request at zoom level 16 or lower
   *
   * The tiles returned are GeoJson features
   * Items with the following properties are returned:
   * * type: A string whose value is "Item"
   * * styleId: The id of the style that originated this feature
   * * designCode: The code of the design the item belongs to
   * * itemId: The item id
   * * colour: The item colour
   * * icon: The item icon code
   * @returns LayerGetBasicTileWebResponseModel
   */
  layerGetBasicLayerTile({
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
  }): Promise<LayerGetBasicTileWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a basic tile for a layer
   * This endpoint allows to query a layer returning big items to be displayed on the map.
   * Only request at zoom level 16 or lower
   *
   * The tiles returned are GeoJson features
   * Items with the following properties are returned:
   * * type: A string whose value is "Item"
   * * styleId: The id of the style that originated this feature
   * * designCode: The code of the design the item belongs to
   * * itemId: The item id
   * * colour: The item colour
   * * icon: The item icon code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetBasicLayerTileApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Get the permissions of a layer by its code
   * Fetches the permissions of a layer by its Guc
   * @returns LayerPermissionsGetWebResponseModel
   */
  layerGetPermissions({
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
  }): Promise<LayerPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the permissions of a layer by its code
   * Fetches the permissions of a layer by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetPermissionsApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Edit permissions for a layer
   * Edit the permissions on the layer with the specified code
   * @returns LayerWithPermissionsWebResponseModel
   */
  layerEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: LayerPermissionsEditWebRequestModel;
  }): Promise<LayerWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a layer
   * Edit the permissions on the layer with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the layer to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: LayerPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists user layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @returns LayerAccessAdvisorByUserListWebResponseModel
   */
  layerLayerAccessAdvisorByUser({
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
  }): Promise<LayerAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerLayerAccessAdvisorByUserApiRequestOptions({
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
  }): ApiRequestOptions;

  /**
   * Lists role layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @returns LayerAccessAdvisorByRoleListWebResponseModel
   */
  layerLayerAccessAdvisorByRole({
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
  }): Promise<LayerAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerLayerAccessAdvisorByRoleApiRequestOptions({
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
  }): ApiRequestOptions;
}
