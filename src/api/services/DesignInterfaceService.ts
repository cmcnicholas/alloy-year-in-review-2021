/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignInterfaceListWebResponseModel } from '../models/DesignInterfaceListWebResponseModel';
import type { DesignInterfaceWithOperationsSummaryWebResponseModel } from '../models/DesignInterfaceWithOperationsSummaryWebResponseModel';
import type { DesignInterfaceWithPermissionsWebResponseModel } from '../models/DesignInterfaceWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiPermissionsEditWebRequestModel } from '../models/DodiPermissionsEditWebRequestModel';
import type { DodiPermissionsGetWebResponseModel } from '../models/DodiPermissionsGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface DesignInterfaceService {
  /**
   * Get a design interface
   * Finds the design interface with the specified code
   * @param code The Guc of the interface to fetch
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceGet(code: string): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a design interface
   * Finds the design interface with the specified code
   * @param code The Guc of the interface to fetch
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List design interfaces
   * Lists the interfaces in the system using pagination
   * @param query Optional query to filter the design interfaces by
   * @param context Optional Context to filter the design interfaces by
   * @param implementedByDodi The optional dodi code Guc, if specified, only the interfaces
   * implemented by that design or interface will be returned
   * @param implementsInterface The optional dodi code Guc, if specified, only the interfaces
   * implementing that interface will be returned
   * @param userGroup The optional user group Guc. If specified, only the interfaces
   * that have this user group code within their permissions or the permissions
   * of the attributes within them are returned
   * @param childDodi Optional Guc to filter design interfaces by. If specified, only the designs
   * that have a link attribute pointing to the specified dodi are returned
   * @param lastEditDate The optional last edit date to return only interfaces created or edited after this date
   * @param queryCompleteDodi Optional boolean that can be set to false to query against design interfaces without taking into account inheritance
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DesignInterfaceListWebResponseModel
   */
  designInterfaceList(
    query?: string | null,
    context?: Context | null,
    implementedByDodi?: string | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): Promise<DesignInterfaceListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List design interfaces
   * Lists the interfaces in the system using pagination
   * @param query Optional query to filter the design interfaces by
   * @param context Optional Context to filter the design interfaces by
   * @param implementedByDodi The optional dodi code Guc, if specified, only the interfaces
   * implemented by that design or interface will be returned
   * @param implementsInterface The optional dodi code Guc, if specified, only the interfaces
   * implementing that interface will be returned
   * @param userGroup The optional user group Guc. If specified, only the interfaces
   * that have this user group code within their permissions or the permissions
   * of the attributes within them are returned
   * @param childDodi Optional Guc to filter design interfaces by. If specified, only the designs
   * that have a link attribute pointing to the specified dodi are returned
   * @param lastEditDate The optional last edit date to return only interfaces created or edited after this date
   * @param queryCompleteDodi Optional boolean that can be set to false to query against design interfaces without taking into account inheritance
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    implementedByDodi?: string | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Get the interface permissions
   * Finds the permissions of a interface with the specified code for optional user
   * @param code The Guc to use to fetch the required design permissions
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns DodiPermissionsGetWebResponseModel
   */
  designInterfaceGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<DodiPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the interface permissions
   * Finds the permissions of a interface with the specified code for optional user
   * @param code The Guc to use to fetch the required design permissions
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a design interface and its attributes
   * Edit the permissions on the design interface and its attributes
   * @param code The Guc of the design interface with the attribute to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns DesignInterfaceWithPermissionsWebResponseModel
   */
  designInterfaceEditPermissions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): Promise<DesignInterfaceWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a design interface and its attributes
   * Edit the permissions on the design interface and its attributes
   * @param code The Guc of the design interface with the attribute to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceEditPermissionsApiRequestOptions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists interface and its attributes with their winning permission for the user
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get interface with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DodiAccessAdvisorByUserListWebResponseModel
   */
  designInterfaceDesignInterfaceAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists interface and its attributes with their winning permission for the user
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get interface with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceDesignInterfaceAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists interface and its attributes with their winning permission for the role
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get interface with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DodiAccessAdvisorByRoleListWebResponseModel
   */
  designInterfaceDesignInterfaceAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists interface and its attributes with their winning permission for the role
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get interface with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceDesignInterfaceAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
