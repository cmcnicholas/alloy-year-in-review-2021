/* eslint-disable */

import type { BasemapAccessAdvisorByRoleListWebResponseModel } from '../models/BasemapAccessAdvisorByRoleListWebResponseModel';
import type { BasemapAccessAdvisorByUserListWebResponseModel } from '../models/BasemapAccessAdvisorByUserListWebResponseModel';
import type { BasemapCreateWebRequestModel } from '../models/BasemapCreateWebRequestModel';
import type { BasemapEditWebRequestModel } from '../models/BasemapEditWebRequestModel';
import type { BasemapListWebResponseModel } from '../models/BasemapListWebResponseModel';
import type { BasemapPermissionsEditWebRequestModel } from '../models/BasemapPermissionsEditWebRequestModel';
import type { BasemapPermissionsGetWebResponseModel } from '../models/BasemapPermissionsGetWebResponseModel';
import type { BasemapWithOperationsSummaryWebResponseModel } from '../models/BasemapWithOperationsSummaryWebResponseModel';
import type { BasemapWithPermissionsWebResponseModel } from '../models/BasemapWithPermissionsWebResponseModel';
import type { Context } from '../models/Context';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface BasemapService {
  /**
   * Get a basemap by its code
   * Fetches a basemap by its globally unique code (Guc).
   * @param code The Guc for the basemap being requested
   * @returns BasemapWithOperationsSummaryWebResponseModel
   */
  basemapGet(code: string): Promise<BasemapWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a basemap by its code
   * Fetches a basemap by its globally unique code (Guc).
   * @param code The Guc for the basemap being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a basemap
   * Edits a basemap based on the information sent in the model
   * @param code The Guc of the basemap to edit
   * @param requestBody Model containing the new basemap details
   * @returns BasemapWithOperationsSummaryWebResponseModel
   */
  basemapEdit(
    code: string,
    requestBody: BasemapEditWebRequestModel,
  ): Promise<BasemapWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a basemap
   * Edits a basemap based on the information sent in the model
   * @param code The Guc of the basemap to edit
   * @param requestBody Model containing the new basemap details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapEditApiRequestOptions(
    code: string,
    requestBody: BasemapEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a basemap
   * Deletes a basemap based on the information sent in the model
   * @param code The Guc of the basemap to delete
   * @returns void
   */
  basemapDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a basemap
   * Deletes a basemap based on the information sent in the model
   * @param code The Guc of the basemap to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Get a list of basemaps
   * Fetches a list of basemaps optionally specifying page and the number of results to return per page.
   * @param query Optional Name query to filter the basemaps by
   * @param userGroup Optional Guc to filter basemaps by. If specified, only the basemaps
   * that have this user group code within their permissions are returned
   * @param context The optional basemaps context to filter on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns BasemapListWebResponseModel
   */
  basemapList(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<BasemapListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of basemaps
   * Fetches a list of basemaps optionally specifying page and the number of results to return per page.
   * @param query Optional Name query to filter the basemaps by
   * @param userGroup Optional Guc to filter basemaps by. If specified, only the basemaps
   * that have this user group code within their permissions are returned
   * @param context The optional basemaps context to filter on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a basemap
   * Creates a basemap based on the information sent in the model
   * @param requestBody Model containing the new basemap details
   * @returns BasemapWithOperationsSummaryWebResponseModel
   */
  basemapCreate(
    requestBody: BasemapCreateWebRequestModel,
  ): Promise<BasemapWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a basemap
   * Creates a basemap based on the information sent in the model
   * @param requestBody Model containing the new basemap details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapCreateApiRequestOptions(requestBody: BasemapCreateWebRequestModel): ApiRequestOptions;

  /**
   * Get a basemap permissions by its code
   * Fetches the permissions of a basemap by its Guc
   * @param code The Guc for the basemap whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns BasemapPermissionsGetWebResponseModel
   */
  basemapGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<BasemapPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a basemap permissions by its code
   * Fetches the permissions of a basemap by its Guc
   * @param code The Guc for the basemap whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a basemap
   * Edit the permissions on the basemap with the specified code
   * @param code The Guc of the basemap to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns BasemapWithPermissionsWebResponseModel
   */
  basemapEditPermissions(
    code: string,
    requestBody: BasemapPermissionsEditWebRequestModel,
  ): Promise<BasemapWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a basemap
   * Edit the permissions on the basemap with the specified code
   * @param code The Guc of the basemap to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapEditPermissionsApiRequestOptions(
    code: string,
    requestBody: BasemapPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists user basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get basemap access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns BasemapAccessAdvisorByUserListWebResponseModel
   */
  basemapBasemapAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<BasemapAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get basemap access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapBasemapAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get basemap access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns BasemapAccessAdvisorByRoleListWebResponseModel
   */
  basemapBasemapAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<BasemapAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get basemap access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapBasemapAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
