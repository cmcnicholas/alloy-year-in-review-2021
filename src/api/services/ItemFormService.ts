/* eslint-disable */

import type { Context } from '../models/Context';
import type { ItemFormAccessAdvisorByRoleListWebResponseModel } from '../models/ItemFormAccessAdvisorByRoleListWebResponseModel';
import type { ItemFormAccessAdvisorByUserListWebResponseModel } from '../models/ItemFormAccessAdvisorByUserListWebResponseModel';
import type { ItemFormAction } from '../models/ItemFormAction';
import type { ItemFormCreateWebRequestModel } from '../models/ItemFormCreateWebRequestModel';
import type { ItemFormEditWebRequestModel } from '../models/ItemFormEditWebRequestModel';
import type { ItemFormListWebResponseModel } from '../models/ItemFormListWebResponseModel';
import type { ItemFormPermissionsEditWebRequestModel } from '../models/ItemFormPermissionsEditWebRequestModel';
import type { ItemFormPermissionsGetWebResponseModel } from '../models/ItemFormPermissionsGetWebResponseModel';
import type { ItemFormWithOperationsSummaryWebResponseModel } from '../models/ItemFormWithOperationsSummaryWebResponseModel';
import type { ItemFormWithPermissionsWebResponseModel } from '../models/ItemFormWithPermissionsWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ItemFormService {
  /**
   * Get an item form by its code
   * Fetches an item form by its globally unique code (Guc).
   * @param code The Guc for the item form being requested
   * @returns ItemFormWithOperationsSummaryWebResponseModel
   */
  itemFormGet(code: string): Promise<ItemFormWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an item form by its code
   * Fetches an item form by its globally unique code (Guc).
   * @param code The Guc for the item form being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit an item form
   * Edits an item form based on the information sent in the model
   * @param code The Guc of the item form to edit
   * @param requestBody Model containing the new item form details
   * @returns ItemFormWithOperationsSummaryWebResponseModel
   */
  itemFormEdit(
    code: string,
    requestBody: ItemFormEditWebRequestModel,
  ): Promise<ItemFormWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an item form
   * Edits an item form based on the information sent in the model
   * @param code The Guc of the item form to edit
   * @param requestBody Model containing the new item form details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormEditApiRequestOptions(
    code: string,
    requestBody: ItemFormEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete an item form
   * Deletes an item form based on the information sent in the model
   * @param code The Guc of the item form to delete
   * @returns void
   */
  itemFormDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete an item form
   * Deletes an item form based on the information sent in the model
   * @param code The Guc of the item form to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Get a list of item forms
   * Fetches a list of item forms optionally specifying page and the number of results to return per page.
   * @param query Optional query to filter the item forms by
   * @param dodiCode Optional dodi code to filter the item forms by
   * @param tags The optional item form tags to filter on. If specified, only the item forms with at least one of the specified tags will be returned
   * @param actions The optional item form actions to filter on. If specified, only the item forms with at least one of the specified actions will be returned
   * @param userGroup Optional Guc to filter item forms by. If specified, only the item forms
   * that have this user group code within their permissions are returned
   * @param context The optional item forms context to filter on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ItemFormListWebResponseModel
   */
  itemFormList(
    query?: string | null,
    dodiCode?: string | null,
    tags?: Array<string> | null,
    actions?: Array<ItemFormAction> | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemFormListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of item forms
   * Fetches a list of item forms optionally specifying page and the number of results to return per page.
   * @param query Optional query to filter the item forms by
   * @param dodiCode Optional dodi code to filter the item forms by
   * @param tags The optional item form tags to filter on. If specified, only the item forms with at least one of the specified tags will be returned
   * @param actions The optional item form actions to filter on. If specified, only the item forms with at least one of the specified actions will be returned
   * @param userGroup Optional Guc to filter item forms by. If specified, only the item forms
   * that have this user group code within their permissions are returned
   * @param context The optional item forms context to filter on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormListApiRequestOptions(
    query?: string | null,
    dodiCode?: string | null,
    tags?: Array<string> | null,
    actions?: Array<ItemFormAction> | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create an item form
   * Creates an item form based on the information sent in the model
   * @param requestBody Model containing the new item form details
   * @returns ItemFormWithOperationsSummaryWebResponseModel
   */
  itemFormCreate(
    requestBody: ItemFormCreateWebRequestModel,
  ): Promise<ItemFormWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create an item form
   * Creates an item form based on the information sent in the model
   * @param requestBody Model containing the new item form details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormCreateApiRequestOptions(requestBody: ItemFormCreateWebRequestModel): ApiRequestOptions;

  /**
   * Get an item form permissions by its code
   * Fetches the permissions of an item form by its Guc
   * @param code The Guc for the item form whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ItemFormPermissionsGetWebResponseModel
   */
  itemFormGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<ItemFormPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an item form permissions by its code
   * Fetches the permissions of an item form by its Guc
   * @param code The Guc for the item form whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for an item form
   * Edits the permissions on the item form with the specified code
   * @param code The Guc of the item form to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ItemFormWithPermissionsWebResponseModel
   */
  itemFormEditPermissions(
    code: string,
    requestBody: ItemFormPermissionsEditWebRequestModel,
  ): Promise<ItemFormWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for an item form
   * Edits the permissions on the item form with the specified code
   * @param code The Guc of the item form to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormEditPermissionsApiRequestOptions(
    code: string,
    requestBody: ItemFormPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists user item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get item form access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ItemFormAccessAdvisorByUserListWebResponseModel
   */
  itemFormItemFormAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemFormAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get item form access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormItemFormAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get item form access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ItemFormAccessAdvisorByRoleListWebResponseModel
   */
  itemFormItemFormAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ItemFormAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get item form access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormItemFormAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
