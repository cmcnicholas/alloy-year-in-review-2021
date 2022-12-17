/* eslint-disable */

import type { Context } from '../models/Context';
import type { MeshAccessAdvisorByRoleListWebResponseModel } from '../models/MeshAccessAdvisorByRoleListWebResponseModel';
import type { MeshAccessAdvisorByUserListWebResponseModel } from '../models/MeshAccessAdvisorByUserListWebResponseModel';
import type { MeshEditWebRequestModel } from '../models/MeshEditWebRequestModel';
import type { MeshListWebResponseModel } from '../models/MeshListWebResponseModel';
import type { MeshPermissionsEditWebRequestModel } from '../models/MeshPermissionsEditWebRequestModel';
import type { MeshPermissionsGetWebResponseModel } from '../models/MeshPermissionsGetWebResponseModel';
import type { MeshWithOperationsSummaryWebResponseModel } from '../models/MeshWithOperationsSummaryWebResponseModel';
import type { MeshWithPermissionsWebResponseModel } from '../models/MeshWithPermissionsWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface MeshService {
  /**
   * Get a mesh by its code
   * Fetches a mesh by its globally unique code (Guc).
   * @returns MeshWithOperationsSummaryWebResponseModel
   */
  meshGet({
    code,
  }: {
    /** The Guc for the mesh being requested **/
    code: string;
  }): Promise<MeshWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a mesh by its code
   * Fetches a mesh by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the mesh being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a mesh
   * Edits a mesh based on the information sent in the model
   * @returns MeshWithOperationsSummaryWebResponseModel
   */
  meshEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit **/
    code: string;
    /** Model containing the new mesh details **/
    requestBody: MeshEditWebRequestModel;
  }): Promise<MeshWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a mesh
   * Edits a mesh based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit **/
    code: string;
    /** Model containing the new mesh details **/
    requestBody: MeshEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get a list of meshes
   * Fetches a list of meshes optionally specifying page and the number of results to return per page.
   * @returns MeshListWebResponseModel
   */
  meshList({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** The optional mesh query string to filter on **/
    query?: string | null;
    /** Optional Guc to filter meshes by. If specified, only the meshes
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional mesh Context filter **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<MeshListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of meshes
   * Fetches a list of meshes optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshListApiRequestOptions({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** The optional mesh query string to filter on **/
    query?: string | null;
    /** Optional Guc to filter meshes by. If specified, only the meshes
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** Optional mesh Context filter **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Get a mesh permissions by its code
   * Fetches the permissions of a mesh by its Guc
   * @returns MeshPermissionsGetWebResponseModel
   */
  meshGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the mesh whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<MeshPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a mesh permissions by its code
   * Fetches the permissions of a mesh by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the mesh whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for a mesh
   * Edit the permissions on the mesh with the specified code
   * @returns MeshWithPermissionsWebResponseModel
   */
  meshEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: MeshPermissionsEditWebRequestModel;
  }): Promise<MeshWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a mesh
   * Edit the permissions on the mesh with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the mesh to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: MeshPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists user meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @returns MeshAccessAdvisorByUserListWebResponseModel
   */
  meshMeshAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get mesh access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<MeshAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshMeshAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get mesh access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists role meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @returns MeshAccessAdvisorByRoleListWebResponseModel
   */
  meshMeshAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get mesh access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<MeshAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshMeshAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get mesh access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
