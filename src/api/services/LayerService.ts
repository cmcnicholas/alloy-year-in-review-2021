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
   * @param code The Guc for the layer being requested
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerGet(code: string): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a layer by its code
   * Fetches a layer by its globally unique code (GUC).
   * @param code The Guc for the layer being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a layer
   * Edits a layer based on the information sent in the model
   * @param code The Guc of the layer to edit
   * @param requestBody Model containing the new layer details
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerEdit(
    code: string,
    requestBody: LayerEditWebRequestModel,
  ): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a layer
   * Edits a layer based on the information sent in the model
   * @param code The Guc of the layer to edit
   * @param requestBody Model containing the new layer details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerEditApiRequestOptions(
    code: string,
    requestBody: LayerEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a layer
   * Deletes a layer based on the information sent in the model
   * @param code The Guc of the layer to delete
   * @returns void
   */
  layerDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a layer
   * Deletes a layer based on the information sent in the model
   * @param code The Guc of the layer to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Get a list of layers allowing to filter by some optional query parameters
   * Fetches a list of layers optionally specifying page and the number of results to return per page.
   * @param name The optional layer name (full or partial) to filter on
   * @param context The optional layer context to filter on
   * @param andTags If this parameter is passed, only the layers with ALL of the specified tags will be returned
   * It is possible to use this in conjunction with the other tags conditions
   * @param orTags If this parameter is passed, only the layers with AT LEAST one of the specified tags will be returned
   * It is possible to use this in conjunction with the other tags conditions
   * @param notTags If this parameter is passed, only the layers with NONE of the specified tags will be returned
   * It is possible to use this in conjunction with the other tags conditions
   * @param userGroup Optional Guc to filter layers by. If specified, only the layers
   * that have this user group code within their permissions are returned
   * @param visualisations The optional layer style visualisations to filter on. If specified, only layers
   * that contain any styles with the given visualisations are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns LayerListWebResponseModel
   */
  layerList(
    name?: string | null,
    context?: Context | null,
    andTags?: Array<string> | null,
    orTags?: Array<string> | null,
    notTags?: Array<string> | null,
    userGroup?: string | null,
    visualisations?: Array<LayerVisualisationType> | null,
    page?: number,
    pageSize?: number,
  ): Promise<LayerListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of layers allowing to filter by some optional query parameters
   * Fetches a list of layers optionally specifying page and the number of results to return per page.
   * @param name The optional layer name (full or partial) to filter on
   * @param context The optional layer context to filter on
   * @param andTags If this parameter is passed, only the layers with ALL of the specified tags will be returned
   * It is possible to use this in conjunction with the other tags conditions
   * @param orTags If this parameter is passed, only the layers with AT LEAST one of the specified tags will be returned
   * It is possible to use this in conjunction with the other tags conditions
   * @param notTags If this parameter is passed, only the layers with NONE of the specified tags will be returned
   * It is possible to use this in conjunction with the other tags conditions
   * @param userGroup Optional Guc to filter layers by. If specified, only the layers
   * that have this user group code within their permissions are returned
   * @param visualisations The optional layer style visualisations to filter on. If specified, only layers
   * that contain any styles with the given visualisations are returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerListApiRequestOptions(
    name?: string | null,
    context?: Context | null,
    andTags?: Array<string> | null,
    orTags?: Array<string> | null,
    notTags?: Array<string> | null,
    userGroup?: string | null,
    visualisations?: Array<LayerVisualisationType> | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a layer
   * Creates a layer based on the information sent in the model
   * @param requestBody Model containing the new layer details
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerCreate(
    requestBody: LayerCreateWebRequestModel,
  ): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a layer
   * Creates a layer based on the information sent in the model
   * @param requestBody Model containing the new layer details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerCreateApiRequestOptions(requestBody: LayerCreateWebRequestModel): ApiRequestOptions;

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
   * @param code The Guc of the layer to reset the style for
   * @param id The AId of the style to reset
   * @param requestBody The model containing the information necessary to reset a layer style
   * @returns LayerWithOperationsSummaryWebResponseModel
   */
  layerResetQuery(
    code: string,
    id: string,
    requestBody: LayerStyleResetWebRequestModel,
  ): Promise<LayerWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Reset a layer style
   * @param code The Guc of the layer to reset the style for
   * @param id The AId of the style to reset
   * @param requestBody The model containing the information necessary to reset a layer style
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerResetQueryApiRequestOptions(
    code: string,
    id: string,
    requestBody: LayerStyleResetWebRequestModel,
  ): ApiRequestOptions;

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
   * @param code The code of the layer to query for
   * @param x The x google tile coordinate
   * @param y The y google tile coordinate
   * @param z The z google tile coordinate
   * @param styleIds The list of style ids to query for. An item will only be returned in one style.
   * The order of the styles specified is thus important since an item belonging to both the first
   * and the last style in the list, will only appear for the first one.
   * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account
   * @returns LayerGetNetworkTileWebResponseModel
   */
  layerGetNetworkLayerTile(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): Promise<LayerGetNetworkTileWebResponseModel>;

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
   * @param code The code of the layer to query for
   * @param x The x google tile coordinate
   * @param y The y google tile coordinate
   * @param z The z google tile coordinate
   * @param styleIds The list of style ids to query for. An item will only be returned in one style.
   * The order of the styles specified is thus important since an item belonging to both the first
   * and the last style in the list, will only appear for the first one.
   * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetNetworkLayerTileApiRequestOptions(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): ApiRequestOptions;

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
   * @param code The code of the layer to query for
   * @param x The x google tile coordinate
   * @param y The y google tile coordinate
   * @param z The z google tile coordinate
   * @param styleIds The list of style ids to query for.
   * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account
   * @returns LayerGetClusterTileWebResponseModel
   */
  layerGetClusterLayerTile(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): Promise<LayerGetClusterTileWebResponseModel>;

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
   * @param code The code of the layer to query for
   * @param x The x google tile coordinate
   * @param y The y google tile coordinate
   * @param z The z google tile coordinate
   * @param styleIds The list of style ids to query for.
   * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetClusterLayerTileApiRequestOptions(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): ApiRequestOptions;

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
   * @param code The code of the layer to query for
   * @param x The x google tile coordinate
   * @param y The y google tile coordinate
   * @param z The z google tile coordinate
   * @param styleIds The list of style ids to query for.
   * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account
   * @returns LayerGetBasicTileWebResponseModel
   */
  layerGetBasicLayerTile(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): Promise<LayerGetBasicTileWebResponseModel>;

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
   * @param code The code of the layer to query for
   * @param x The x google tile coordinate
   * @param y The y google tile coordinate
   * @param z The z google tile coordinate
   * @param styleIds The list of style ids to query for.
   * A non specified value or an empty list means that all the styles belonging to the layer have to be taken into account
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetBasicLayerTileApiRequestOptions(
    code: string,
    x: number,
    y: number,
    z: number,
    styleIds?: Array<string> | null,
  ): ApiRequestOptions;

  /**
   * Get the permissions of a layer by its code
   * Fetches the permissions of a layer by its Guc
   * @param code The Guc for the layer whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns LayerPermissionsGetWebResponseModel
   */
  layerGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<LayerPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the permissions of a layer by its code
   * Fetches the permissions of a layer by its Guc
   * @param code The Guc for the layer whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a layer
   * Edit the permissions on the layer with the specified code
   * @param code The Guc of the layer to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns LayerWithPermissionsWebResponseModel
   */
  layerEditPermissions(
    code: string,
    requestBody: LayerPermissionsEditWebRequestModel,
  ): Promise<LayerWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a layer
   * Edit the permissions on the layer with the specified code
   * @param code The Guc of the layer to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerEditPermissionsApiRequestOptions(
    code: string,
    requestBody: LayerPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists user layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get layer access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns LayerAccessAdvisorByUserListWebResponseModel
   */
  layerLayerAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<LayerAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get layer access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerLayerAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get layer access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns LayerAccessAdvisorByRoleListWebResponseModel
   */
  layerLayerAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<LayerAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role layers with their winning permission
   * Fetches a list of layers with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get layer access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  layerLayerAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
