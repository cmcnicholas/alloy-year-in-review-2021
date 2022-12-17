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
   * @returns BasemapWithOperationsSummaryWebResponseModel
   */
  basemapGet({
    code,
  }: {
    /** The Guc for the basemap being requested **/
    code: string;
  }): Promise<BasemapWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a basemap by its code
   * Fetches a basemap by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the basemap being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a basemap
   * Edits a basemap based on the information sent in the model
   * @returns BasemapWithOperationsSummaryWebResponseModel
   */
  basemapEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit **/
    code: string;
    /** Model containing the new basemap details **/
    requestBody: BasemapEditWebRequestModel;
  }): Promise<BasemapWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a basemap
   * Edits a basemap based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit **/
    code: string;
    /** Model containing the new basemap details **/
    requestBody: BasemapEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a basemap
   * Deletes a basemap based on the information sent in the model
   * @returns void
   */
  basemapDelete({
    code,
  }: {
    /** The Guc of the basemap to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a basemap
   * Deletes a basemap based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the basemap to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Get a list of basemaps
   * Fetches a list of basemaps optionally specifying page and the number of results to return per page.
   * @returns BasemapListWebResponseModel
   */
  basemapList({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional Name query to filter the basemaps by **/
    query?: string | null;
    /** Optional Guc to filter basemaps by. If specified, only the basemaps
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional basemaps context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<BasemapListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of basemaps
   * Fetches a list of basemaps optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapListApiRequestOptions({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional Name query to filter the basemaps by **/
    query?: string | null;
    /** Optional Guc to filter basemaps by. If specified, only the basemaps
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional basemaps context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a basemap
   * Creates a basemap based on the information sent in the model
   * @returns BasemapWithOperationsSummaryWebResponseModel
   */
  basemapCreate({
    requestBody,
  }: {
    /** Model containing the new basemap details **/
    requestBody: BasemapCreateWebRequestModel;
  }): Promise<BasemapWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a basemap
   * Creates a basemap based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new basemap details **/
    requestBody: BasemapCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get a basemap permissions by its code
   * Fetches the permissions of a basemap by its Guc
   * @returns BasemapPermissionsGetWebResponseModel
   */
  basemapGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the basemap whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<BasemapPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a basemap permissions by its code
   * Fetches the permissions of a basemap by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the basemap whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for a basemap
   * Edit the permissions on the basemap with the specified code
   * @returns BasemapWithPermissionsWebResponseModel
   */
  basemapEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: BasemapPermissionsEditWebRequestModel;
  }): Promise<BasemapWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a basemap
   * Edit the permissions on the basemap with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the basemap to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: BasemapPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists user basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @returns BasemapAccessAdvisorByUserListWebResponseModel
   */
  basemapBasemapAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get basemap access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<BasemapAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapBasemapAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get basemap access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists role basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @returns BasemapAccessAdvisorByRoleListWebResponseModel
   */
  basemapBasemapAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get basemap access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<BasemapAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role basemaps with their winning permission
   * Fetches a list of basemaps with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  basemapBasemapAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get basemap access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
