/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignInterfaceAddDesignInterfaceWebRequestModel } from '../models/DesignInterfaceAddDesignInterfaceWebRequestModel';
import type { DesignInterfaceAttributeCreateWebResponseModel } from '../models/DesignInterfaceAttributeCreateWebResponseModel';
import type { DesignInterfaceCreateWebRequestModel } from '../models/DesignInterfaceCreateWebRequestModel';
import type { DesignInterfaceEditWebRequestModel } from '../models/DesignInterfaceEditWebRequestModel';
import type { DesignInterfaceListWebResponseModel } from '../models/DesignInterfaceListWebResponseModel';
import type { DesignInterfaceWithOperationsSummaryWebResponseModel } from '../models/DesignInterfaceWithOperationsSummaryWebResponseModel';
import type { DesignInterfaceWithPermissionsWebResponseModel } from '../models/DesignInterfaceWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiAttributeCreateWebRequestModel } from '../models/DodiAttributeCreateWebRequestModel';
import type { DodiAttributeEditWebRequestModel } from '../models/DodiAttributeEditWebRequestModel';
import type { DodiPermissionsEditWebRequestModel } from '../models/DodiPermissionsEditWebRequestModel';
import type { DodiPermissionsGetWebResponseModel } from '../models/DodiPermissionsGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface DesignInterfaceService {
  /**
   * Get a design interface
   * Finds the design interface with the specified code
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceGet({
    code,
  }: {
    /** The Guc of the interface to fetch **/
    code: string;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a design interface
   * Finds the design interface with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceGetApiRequestOptions({
    code,
  }: {
    /** The Guc of the interface to fetch **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a design interface
   * Edits the design interface matching the specified code by using the provided details
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignInterfaceEditWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a design interface
   * Edits the design interface matching the specified code by using the provided details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to edit **/
    code: string;
    /** The model containing the edit details **/
    requestBody: DesignInterfaceEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a design interface
   * Deletes the design interface matching the specified code
   * @returns void
   */
  designInterfaceDelete({
    code,
  }: {
    /** The Guc of the design interface to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a design interface
   * Deletes the design interface matching the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the design interface to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List design interfaces
   * Lists the interfaces in the system using pagination
   * @returns DesignInterfaceListWebResponseModel
   */
  designInterfaceList({
    query,
    context,
    implementedByDodi,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the design interfaces by **/
    query?: string | null;
    /** Optional Context to filter the design interfaces by **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implemented by that design or interface will be returned **/
    implementedByDodi?: string | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the interfaces
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter design interfaces by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only interfaces created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against design interfaces without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<DesignInterfaceListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List design interfaces
   * Lists the interfaces in the system using pagination
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceListApiRequestOptions({
    query,
    context,
    implementedByDodi,
    implementsInterface,
    userGroup,
    childDodi,
    lastEditDate,
    queryCompleteDodi,
    page,
    pageSize,
  }: {
    /** Optional query to filter the design interfaces by **/
    query?: string | null;
    /** Optional Context to filter the design interfaces by **/
    context?: Context | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implemented by that design or interface will be returned **/
    implementedByDodi?: string | null;
    /** The optional dodi code Guc, if specified, only the interfaces
     * implementing that interface will be returned **/
    implementsInterface?: string | null;
    /** The optional user group Guc. If specified, only the interfaces
     * that have this user group code within their permissions or the permissions
     * of the attributes within them are returned **/
    userGroup?: string | null;
    /** Optional Guc to filter design interfaces by. If specified, only the designs
     * that have a link attribute pointing to the specified dodi are returned **/
    childDodi?: string | null;
    /** The optional last edit date to return only interfaces created or edited after this date **/
    lastEditDate?: string | null;
    /** Optional boolean that can be set to false to query against design interfaces without taking into account inheritance **/
    queryCompleteDodi?: boolean | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a design interface
   * Creates a design interface by using the information provided in the model
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceCreate({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignInterfaceCreateWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a design interface
   * Creates a design interface by using the information provided in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceCreateApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all the create details **/
    requestBody: DesignInterfaceCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Create a design interface attribute
   * Creates a design interface attribute using the information provided in the model
   * @returns DesignInterfaceAttributeCreateWebResponseModel
   */
  designInterfaceCreateDesignInterfaceAttribute({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): Promise<DesignInterfaceAttributeCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a design interface attribute
   * Creates a design interface attribute using the information provided in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceCreateDesignInterfaceAttributeApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to create the attribute **/
    code: string;
    /** The model containing the details of the attribute to create **/
    requestBody: DodiAttributeCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Edit a design interface attribute
   * Edits a design interface attribute using the information provided in the model
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceEditDesignInterfaceAttribute({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design interface to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a design interface attribute
   * Edits a design interface attribute using the information provided in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceEditDesignInterfaceAttributeApiRequestOptions({
    code,
    attributeCode,
    requestBody,
  }: {
    /** The Guc of the design interface to edit the attribute **/
    code: string;
    /** The code of the attribute to edit **/
    attributeCode: string;
    /** The attribute edit model **/
    requestBody: DodiAttributeEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a design interface attribute
   * Finds and removes the specified attribute from the design interface with the provided code
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceDeleteDesignInterfaceAttribute({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design interface to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Delete a design interface attribute
   * Finds and removes the specified attribute from the design interface with the provided code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceDeleteDesignInterfaceAttributeApiRequestOptions({
    code,
    attributeCode,
    signature,
  }: {
    /** The Guc of the design interface to delete the attribute from **/
    code: string;
    /** The Guc of the attribute to delete **/
    attributeCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Add an interface to a design interface
   * Adds an interface to the design interface with the specified code. After the interface has been added, the design interface
   * will include all the attributes that are part of that implemented interface. Returns updated design interface.
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceAddDesignInterface({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignInterfaceAddDesignInterfaceWebRequestModel;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an interface to a design interface
   * Adds an interface to the design interface with the specified code. After the interface has been added, the design interface
   * will include all the attributes that are part of that implemented interface. Returns updated design interface.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceAddDesignInterfaceApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface to add an interface to **/
    code: string;
    /** The model containing the details of the interface to add **/
    requestBody: DesignInterfaceAddDesignInterfaceWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove an interface from a design interface
   * Removes an interface from the ones the design interface implements. This does not remove the interface itself from the system.
   * Returns updated design interface.
   * @returns DesignInterfaceWithOperationsSummaryWebResponseModel
   */
  designInterfaceRemoveDesignInterface({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design interface to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): Promise<DesignInterfaceWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an interface from a design interface
   * Removes an interface from the ones the design interface implements. This does not remove the interface itself from the system.
   * Returns updated design interface.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceRemoveDesignInterfaceApiRequestOptions({
    code,
    interfaceCode,
    signature,
  }: {
    /** The Guc of the design interface to remove an interface from **/
    code: string;
    /** The Guc of the interface to be removed **/
    interfaceCode: string;
    /** The signature is used to ensure that the design interface being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design interface **/
    signature: string | null;
  }): ApiRequestOptions;

  /**
   * Get the interface permissions
   * Finds the permissions of a interface with the specified code for optional user
   * @returns DodiPermissionsGetWebResponseModel
   */
  designInterfaceGetPermissions({
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
   * Get the interface permissions
   * Finds the permissions of a interface with the specified code for optional user
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceGetPermissionsApiRequestOptions({
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
   * Edit permissions for a design interface and its attributes
   * Edit the permissions on the design interface and its attributes
   * @returns DesignInterfaceWithPermissionsWebResponseModel
   */
  designInterfaceEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface with the attribute to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): Promise<DesignInterfaceWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a design interface and its attributes
   * Edit the permissions on the design interface and its attributes
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the design interface with the attribute to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: DodiPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists interface and its attributes with their winning permission for the user
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns DodiAccessAdvisorByUserListWebResponseModel
   */
  designInterfaceDesignInterfaceAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get interface with attributes access advisor for **/
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
   * Lists interface and its attributes with their winning permission for the user
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceDesignInterfaceAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get interface with attributes access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists interface and its attributes with their winning permission for the role
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns DodiAccessAdvisorByRoleListWebResponseModel
   */
  designInterfaceDesignInterfaceAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get interface with attributes access advisor for **/
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
   * Lists interface and its attributes with their winning permission for the role
   * Fetches a list of interface and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designInterfaceDesignInterfaceAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get interface with attributes access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
