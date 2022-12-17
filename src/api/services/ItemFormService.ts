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
   * @returns ItemFormWithOperationsSummaryWebResponseModel
   */
  itemFormGet({
    code,
  }: {
    /** The Guc for the item form being requested **/
    code: string;
  }): Promise<ItemFormWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an item form by its code
   * Fetches an item form by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the item form being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit an item form
   * Edits an item form based on the information sent in the model
   * @returns ItemFormWithOperationsSummaryWebResponseModel
   */
  itemFormEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit **/
    code: string;
    /** Model containing the new item form details **/
    requestBody: ItemFormEditWebRequestModel;
  }): Promise<ItemFormWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an item form
   * Edits an item form based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit **/
    code: string;
    /** Model containing the new item form details **/
    requestBody: ItemFormEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete an item form
   * Deletes an item form based on the information sent in the model
   * @returns void
   */
  itemFormDelete({
    code,
  }: {
    /** The Guc of the item form to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete an item form
   * Deletes an item form based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the item form to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Get a list of item forms
   * Fetches a list of item forms optionally specifying page and the number of results to return per page.
   * @returns ItemFormListWebResponseModel
   */
  itemFormList({
    query,
    dodiCode,
    tags,
    actions,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the item forms by **/
    query?: string | null;
    /** Optional dodi code to filter the item forms by **/
    dodiCode?: string | null;
    /** The optional item form tags to filter on. If specified, only the item forms with at least one of the specified tags will be returned **/
    tags?: Array<string> | null;
    /** The optional item form actions to filter on. If specified, only the item forms with at least one of the specified actions will be returned **/
    actions?: Array<ItemFormAction> | null;
    /** Optional Guc to filter item forms by. If specified, only the item forms
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional item forms context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemFormListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of item forms
   * Fetches a list of item forms optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormListApiRequestOptions({
    query,
    dodiCode,
    tags,
    actions,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the item forms by **/
    query?: string | null;
    /** Optional dodi code to filter the item forms by **/
    dodiCode?: string | null;
    /** The optional item form tags to filter on. If specified, only the item forms with at least one of the specified tags will be returned **/
    tags?: Array<string> | null;
    /** The optional item form actions to filter on. If specified, only the item forms with at least one of the specified actions will be returned **/
    actions?: Array<ItemFormAction> | null;
    /** Optional Guc to filter item forms by. If specified, only the item forms
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional item forms context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create an item form
   * Creates an item form based on the information sent in the model
   * @returns ItemFormWithOperationsSummaryWebResponseModel
   */
  itemFormCreate({
    requestBody,
  }: {
    /** Model containing the new item form details **/
    requestBody: ItemFormCreateWebRequestModel;
  }): Promise<ItemFormWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create an item form
   * Creates an item form based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new item form details **/
    requestBody: ItemFormCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get an item form permissions by its code
   * Fetches the permissions of an item form by its Guc
   * @returns ItemFormPermissionsGetWebResponseModel
   */
  itemFormGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the item form whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<ItemFormPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an item form permissions by its code
   * Fetches the permissions of an item form by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the item form whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for an item form
   * Edits the permissions on the item form with the specified code
   * @returns ItemFormWithPermissionsWebResponseModel
   */
  itemFormEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: ItemFormPermissionsEditWebRequestModel;
  }): Promise<ItemFormWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for an item form
   * Edits the permissions on the item form with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the item form to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: ItemFormPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists user item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @returns ItemFormAccessAdvisorByUserListWebResponseModel
   */
  itemFormItemFormAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get item form access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemFormAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormItemFormAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get item form access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists role item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @returns ItemFormAccessAdvisorByRoleListWebResponseModel
   */
  itemFormItemFormAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get item form access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ItemFormAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role item forms with their winning permission
   * Fetches a list of item forms with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  itemFormItemFormAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get item form access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
