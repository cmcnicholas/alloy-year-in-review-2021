/* eslint-disable */

import type { Context } from '../models/Context';
import type { DesignAddDesignInterfaceWebRequestModel } from '../models/DesignAddDesignInterfaceWebRequestModel';
import type { DesignCreateWebRequestModel } from '../models/DesignCreateWebRequestModel';
import type { DesignEditWebRequestModel } from '../models/DesignEditWebRequestModel';
import type { DesignListWebResponseModel } from '../models/DesignListWebResponseModel';
import type { DesignWithOperationsSummaryWebResponseModel } from '../models/DesignWithOperationsSummaryWebResponseModel';
import type { DesignWithPermissionsWebResponseModel } from '../models/DesignWithPermissionsWebResponseModel';
import type { DodiAccessAdvisorByRoleListWebResponseModel } from '../models/DodiAccessAdvisorByRoleListWebResponseModel';
import type { DodiAccessAdvisorByUserListWebResponseModel } from '../models/DodiAccessAdvisorByUserListWebResponseModel';
import type { DodiAttributeCreateWebRequestModel } from '../models/DodiAttributeCreateWebRequestModel';
import type { DodiAttributeCreateWebResponseModel } from '../models/DodiAttributeCreateWebResponseModel';
import type { DodiAttributeEditWebRequestModel } from '../models/DodiAttributeEditWebRequestModel';
import type { DodiPermissionsEditWebRequestModel } from '../models/DodiPermissionsEditWebRequestModel';
import type { DodiPermissionsGetWebResponseModel } from '../models/DodiPermissionsGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface DesignService {
  /**
   * Get a design by its Guc
   * Finds a design with the specified code
   * @param code The Guc to use to fetch the required design
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designGet(code: string): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a design by its Guc
   * Finds a design with the specified code
   * @param code The Guc to use to fetch the required design
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a design
   * Edits the design matching the specified code by using the provided details
   * @param code The Guc of the design to edit
   * @param requestBody The model containing the edit details
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designEdit(
    code: string,
    requestBody: DesignEditWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a design
   * Edits the design matching the specified code by using the provided details
   * @param code The Guc of the design to edit
   * @param requestBody The model containing the edit details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designEditApiRequestOptions(
    code: string,
    requestBody: DesignEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a design
   * Deletes the design matching the specified code
   * @param code The Guc of the design to delete
   * @returns void
   */
  designDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a design
   * Deletes the design matching the specified code
   * @param code The Guc of the design to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List and filter designs
   * List designs with optional filters on Context and a string query
   * @param query Optional query to filter the designs by
   * @param context Optional Context filter
   * @param implementsInterface The optional dodi code Guc, if specified, only the designs
   * implementing that interface will be returned
   * @param userGroup Optional Guc to filter designs by. If specified, only the designs
   * that have this user group code within their permissions or the permissions
   * of the attributes within them are returned
   * @param childDodi Optional Guc to filter designs by. If specified, only the designs
   * that have a link attribute pointing to the specified dodi are returned
   * @param lastEditDate The optional last edit date to return only designs created or edited after this date
   * @param queryCompleteDodi Optional boolean that can be set to false to query against designs without taking into account inheritance
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DesignListWebResponseModel
   */
  designList(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): Promise<DesignListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List and filter designs
   * List designs with optional filters on Context and a string query
   * @param query Optional query to filter the designs by
   * @param context Optional Context filter
   * @param implementsInterface The optional dodi code Guc, if specified, only the designs
   * implementing that interface will be returned
   * @param userGroup Optional Guc to filter designs by. If specified, only the designs
   * that have this user group code within their permissions or the permissions
   * of the attributes within them are returned
   * @param childDodi Optional Guc to filter designs by. If specified, only the designs
   * that have a link attribute pointing to the specified dodi are returned
   * @param lastEditDate The optional last edit date to return only designs created or edited after this date
   * @param queryCompleteDodi Optional boolean that can be set to false to query against designs without taking into account inheritance
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designListApiRequestOptions(
    query?: string | null,
    context?: Context | null,
    implementsInterface?: string | null,
    userGroup?: string | null,
    childDodi?: string | null,
    lastEditDate?: string | null,
    queryCompleteDodi?: boolean | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a design
   * Creates a design by using the information provided in the model
   * @param requestBody The model containing all the create details
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designCreate(
    requestBody: DesignCreateWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a design
   * Creates a design by using the information provided in the model
   * @param requestBody The model containing all the create details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designCreateApiRequestOptions(requestBody: DesignCreateWebRequestModel): ApiRequestOptions;

  /**
   * Create a design attribute
   * Creates a design attribute using the information provided in the model
   * @param code The Guc of the design to create the attribute
   * @param requestBody The model containing the details of the attribute to create
   * @returns DodiAttributeCreateWebResponseModel
   */
  designCreateDesignAttribute(
    code: string,
    requestBody: DodiAttributeCreateWebRequestModel,
  ): Promise<DodiAttributeCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a design attribute
   * Creates a design attribute using the information provided in the model
   * @param code The Guc of the design to create the attribute
   * @param requestBody The model containing the details of the attribute to create
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designCreateDesignAttributeApiRequestOptions(
    code: string,
    requestBody: DodiAttributeCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Edit a design attribute
   * Edits a design attribute using the information provided in the model
   * @param code The Guc of the design to edit the attribute
   * @param attributeCode The code of the attribute to edit
   * @param requestBody The attribute edit model
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designEditDesignAttribute(
    code: string,
    attributeCode: string,
    requestBody: DodiAttributeEditWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a design attribute
   * Edits a design attribute using the information provided in the model
   * @param code The Guc of the design to edit the attribute
   * @param attributeCode The code of the attribute to edit
   * @param requestBody The attribute edit model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designEditDesignAttributeApiRequestOptions(
    code: string,
    attributeCode: string,
    requestBody: DodiAttributeEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a design attribute
   * Finds and removes the specified attribute from the design with the provided code
   * @param code The Guc of the design to delete the attribute from
   * @param attributeCode The Guc of the attribute to delete
   * @param signature The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designDeleteDesignAttribute(
    code: string,
    attributeCode: string,
    signature?: string | null,
  ): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Delete a design attribute
   * Finds and removes the specified attribute from the design with the provided code
   * @param code The Guc of the design to delete the attribute from
   * @param attributeCode The Guc of the attribute to delete
   * @param signature The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDeleteDesignAttributeApiRequestOptions(
    code: string,
    attributeCode: string,
    signature?: string | null,
  ): ApiRequestOptions;

  /**
   * Add an interface to a design
   * Adds an interface to the design with the specified code. After the interface has been added the design
   * will include all the attributes that are part of that interface. Returns updated design.
   * @param code The Guc of the design to add an interface to
   * @param requestBody The model containing the details of the interface to add
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designAddDesignInterface(
    code: string,
    requestBody: DesignAddDesignInterfaceWebRequestModel,
  ): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Add an interface to a design
   * Adds an interface to the design with the specified code. After the interface has been added the design
   * will include all the attributes that are part of that interface. Returns updated design.
   * @param code The Guc of the design to add an interface to
   * @param requestBody The model containing the details of the interface to add
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designAddDesignInterfaceApiRequestOptions(
    code: string,
    requestBody: DesignAddDesignInterfaceWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Remove an interface from a design
   * Removes an interface from the ones the design implements. This does not remove the interface itself from the system.
   * However all the item attributes belonging to the interface being removed will be deleted from all the items belonging
   * to the design. This is an unaudited change and it will not be possible to bring those values back. Returns updated design.
   * @param code The Guc of the design to remove an interface from
   * @param interfaceCode The Guc of the interface to be removed
   * @param signature The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   * @returns DesignWithOperationsSummaryWebResponseModel
   */
  designRemoveDesignInterface(
    code: string,
    interfaceCode: string,
    signature?: string | null,
  ): Promise<DesignWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove an interface from a design
   * Removes an interface from the ones the design implements. This does not remove the interface itself from the system.
   * However all the item attributes belonging to the interface being removed will be deleted from all the items belonging
   * to the design. This is an unaudited change and it will not be possible to bring those values back. Returns updated design.
   * @param code The Guc of the design to remove an interface from
   * @param interfaceCode The Guc of the interface to be removed
   * @param signature The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designRemoveDesignInterfaceApiRequestOptions(
    code: string,
    interfaceCode: string,
    signature?: string | null,
  ): ApiRequestOptions;

  /**
   * Get the design permissions
   * Finds the permissions of a design with the specified code for optional user
   * @param code The Guc to use to fetch the required design permissions
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns DodiPermissionsGetWebResponseModel
   */
  designGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<DodiPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the design permissions
   * Finds the permissions of a design with the specified code for optional user
   * @param code The Guc to use to fetch the required design permissions
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a design and its attributes
   * Edit the permissions on the design with the specified code. New permissions will replace any existing permissions on both design and its attributes
   * @param code The Guc of the design to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns DesignWithPermissionsWebResponseModel
   */
  designEditPermissions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): Promise<DesignWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a design and its attributes
   * Edit the permissions on the design with the specified code. New permissions will replace any existing permissions on both design and its attributes
   * @param code The Guc of the design to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designEditPermissionsApiRequestOptions(
    code: string,
    requestBody: DodiPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists design and its attributes with their winning permission for the user
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get design with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DodiAccessAdvisorByUserListWebResponseModel
   */
  designDesignAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists design and its attributes with their winning permission for the user
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get design with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDesignAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists design and its attributes with their winning permission for the role
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get design with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns DodiAccessAdvisorByRoleListWebResponseModel
   */
  designDesignAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<DodiAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists design and its attributes with their winning permission for the role
   * Fetches a list of design and its attributes with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get design with attributes access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  designDesignAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
