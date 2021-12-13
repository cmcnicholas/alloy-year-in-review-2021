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
   * @param code The Guc for the mesh being requested
   * @returns MeshWithOperationsSummaryWebResponseModel
   */
  meshGet(code: string): Promise<MeshWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a mesh by its code
   * Fetches a mesh by its globally unique code (Guc).
   * @param code The Guc for the mesh being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a mesh
   * Edits a mesh based on the information sent in the model
   * @param code The Guc of the mesh to edit
   * @param requestBody Model containing the new mesh details
   * @returns MeshWithOperationsSummaryWebResponseModel
   */
  meshEdit(
    code: string,
    requestBody: MeshEditWebRequestModel,
  ): Promise<MeshWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a mesh
   * Edits a mesh based on the information sent in the model
   * @param code The Guc of the mesh to edit
   * @param requestBody Model containing the new mesh details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshEditApiRequestOptions(code: string, requestBody: MeshEditWebRequestModel): ApiRequestOptions;

  /**
   * Get a list of meshes
   * Fetches a list of meshes optionally specifying page and the number of results to return per page.
   * @param query The optional mesh query string to filter on
   * @param userGroup Optional Guc to filter meshes by. If specified, only the meshes
   * that have this user group code within their permissions are returned
   * @param context Optional mesh Context filter
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns MeshListWebResponseModel
   */
  meshList(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<MeshListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of meshes
   * Fetches a list of meshes optionally specifying page and the number of results to return per page.
   * @param query The optional mesh query string to filter on
   * @param userGroup Optional Guc to filter meshes by. If specified, only the meshes
   * that have this user group code within their permissions are returned
   * @param context Optional mesh Context filter
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Get a mesh permissions by its code
   * Fetches the permissions of a mesh by its Guc
   * @param code The Guc for the mesh whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns MeshPermissionsGetWebResponseModel
   */
  meshGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<MeshPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a mesh permissions by its code
   * Fetches the permissions of a mesh by its Guc
   * @param code The Guc for the mesh whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a mesh
   * Edit the permissions on the mesh with the specified code
   * @param code The Guc of the mesh to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns MeshWithPermissionsWebResponseModel
   */
  meshEditPermissions(
    code: string,
    requestBody: MeshPermissionsEditWebRequestModel,
  ): Promise<MeshWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a mesh
   * Edit the permissions on the mesh with the specified code
   * @param code The Guc of the mesh to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshEditPermissionsApiRequestOptions(
    code: string,
    requestBody: MeshPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists user meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get mesh access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns MeshAccessAdvisorByUserListWebResponseModel
   */
  meshMeshAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<MeshAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get mesh access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshMeshAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get mesh access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns MeshAccessAdvisorByRoleListWebResponseModel
   */
  meshMeshAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<MeshAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role meshes with their winning permission
   * Fetches a list of meshes with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get mesh access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  meshMeshAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
