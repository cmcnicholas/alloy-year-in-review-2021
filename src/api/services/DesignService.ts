/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignAddDesignInterfaceWebRequestModel } from '../models/DesignAddDesignInterfaceWebRequestModel';
import type { DesignAttributeCreateWebResponseModel } from '../models/DesignAttributeCreateWebResponseModel';
import type { DesignCreateWebRequestModel } from '../models/DesignCreateWebRequestModel';
import type { DesignEditWebRequestModel } from '../models/DesignEditWebRequestModel';
import type { DesignListWebResponseModel } from '../models/DesignListWebResponseModel';
import type { DesignWithOperationsSummaryWebResponseModel } from '../models/DesignWithOperationsSummaryWebResponseModel';
import type { DesignWithPermissionsWebResponseModel } from '../models/DesignWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiAttributeCreateWebRequestModel } from '../models/DodiAttributeCreateWebRequestModel';
import type { DodiAttributeEditWebRequestModel } from '../models/DodiAttributeEditWebRequestModel';
import type { DodiPermissionsEditWebRequestModel } from '../models/DodiPermissionsEditWebRequestModel';
import type { DodiPermissionsGetWebResponseModel } from '../models/DodiPermissionsGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface DesignService {
  /**
   * Get a design by its Guc
   * Finds a design with the specified code
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designGet({
    code,
  }: {
    /** The Guc to use to fetch the required design **/
    code: string;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a design by its Guc
   * Finds a design with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designGetApiRequestOptions({
    code,
  }: {
    /** The Guc to use to fetch the required design **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a design
   * Edits the design matching the specified code by using the provided details
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignEditWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a design
   * Edits the design matching the specified code by using the provided details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a design
   * Deletes the design matching the specified code
   * @returns void
   */
  designDelete({
    code,
  }: {
    /** The Guc of the design to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a design
   * Deletes the design matching the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the design to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List and filter designs
   * List designs with optional filters on Context and a string query
   * @returns DesignListWebResponseModel
   */
  designList({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the designs by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only designs created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against designs without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DesignListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List and filter designs
   * List designs with optional filters on Context and a string query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designListApiRequestOptions({
    query,
    context,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the designs by **/
    query?: string | null;
    /** Optional Context filter **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter designs by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only designs created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against designs without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a design
   * Creates a design by using the information provided in the model
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designCreate({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignCreateWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a design
   * Creates a design by using the information provided in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Create a design attribute
   * Creates a design attribute using the information provided in the model
   * @returns DesignAttributeCreateWebResponseModel
   */
  designCreateDesignAttribute({
    code,
    requestBody,
  }: {
    /** The Guc of the design to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): Promise<DesignAttributeCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a design attribute
   * Creates a design attribute using the information provided in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designCreateDesignAttributeApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Edit a design attribute
   * Edits a design attribute using the information provided in the model
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designEditDesignAttribute({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a design attribute
   * Edits a design attribute using the information provided in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designEditDesignAttributeApiRequestOptions({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a design attribute
   * Finds and removes the specified attribute from the design with the provided code
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designDeleteDesignAttribute({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Delete a design attribute
   * Finds and removes the specified attribute from the design with the provided code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDeleteDesignAttributeApiRequestOptions({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Add an interface to a design
   * Adds an interface to the design with the specified code. After the interface has been added the design
   * will include all the attributes that are part of that interface. Returns updated design.
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designAddDesignInterface({
    code,
    requestBody,
  }: {
    /** The Guc of the design to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignAddDesignInterfaceWebRequestModel;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an interface to a design
   * Adds an interface to the design with the specified code. After the interface has been added the design
   * will include all the attributes that are part of that interface. Returns updated design.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designAddDesignInterfaceApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignAddDesignInterfaceWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove an interface from a design
   * Removes an interface from the ones the design implements. This does not remove the interface itself from the system.
   * However all the item attributes belonging to the interface being removed will be deleted from all the items belonging
   * to the design. This is an unaudited change and it will not be possible to bring those values back. Returns updated design.
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designRemoveDesignInterface({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an interface from a design
   * Removes an interface from the ones the design implements. This does not remove the interface itself from the system.
   * However all the item attributes belonging to the interface being removed will be deleted from all the items belonging
   * to the design. This is an unaudited change and it will not be possible to bring those values back. Returns updated design.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designRemoveDesignInterfaceApiRequestOptions({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Get the design permissions
   * Finds the permissions of a design with the specified code for optional user
   * @returns DodiPermissionsGetWebResponseModel
   */
  designGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc to use to fetch the required design permissions **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<DodiPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the design permissions
   * Finds the permissions of a design with the specified code for optional user
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc to use to fetch the required design permissions **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for a design and its attributes
   * Edit the permissions on the design with the specified code. New permissions will replace any existing permissions on both design and its attributes
   * @returns DesignWithPermissionsWebResponseModel
   */
  designEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): Promise<DesignWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a design and its attributes
   * Edit the permissions on the design with the specified code. New permissions will replace any existing permissions on both design and its attributes
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists design and its attributes with their winning permission for the user
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns DodiAccessAdvisorByUserListWebResponseModel
   */
  designDesignAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get design with attributes access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists design and its attributes with their winning permission for the user
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDesignAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get design with attributes access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists design and its attributes with their winning permission for the role
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns DodiAccessAdvisorByRoleListWebResponseModel
   */
  designDesignAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get design with attributes access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DodiAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists design and its attributes with their winning permission for the role
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDesignAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get design with attributes access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
