/* eslint-disable */

import type { AccessPolicyCreateWebRequestModel } from '../models/AccessPolicyCreateWebRequestModel';
import type { AccessPolicyEditWebRequestModel } from '../models/AccessPolicyEditWebRequestModel';
import type { AccessPolicyListWebResponseModel } from '../models/AccessPolicyListWebResponseModel';
import type { AccessPolicyRuleCreateWebRequestModel } from '../models/AccessPolicyRuleCreateWebRequestModel';
import type { AccessPolicyRuleEditWebRequestModel } from '../models/AccessPolicyRuleEditWebRequestModel';
import type { AccessPolicyWebModel } from '../models/AccessPolicyWebModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface AccessPolicyService {
  /**
   * Get an Access Policy by its code
   * Fetches an Access Policy by its globally unique code (Guc).
   * @param code The Guc for the Access Policy being requested
   * @returns AccessPolicyWebModel
   */
  accessPolicyGet(code: string): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an Access Policy by its code
   * Fetches an Access Policy by its globally unique code (Guc).
   * @param code The Guc for the Access Policy being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit an Access Policy
   * Edits an Access Policy based on the information sent in the model
   * @param code The Guc of the Access Policy to edit
   * @param requestBody Model containing the new Access Policy details
   * @returns AccessPolicyWebModel
   */
  accessPolicyEdit(
    code: string,
    requestBody: AccessPolicyEditWebRequestModel,
  ): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an Access Policy
   * Edits an Access Policy based on the information sent in the model
   * @param code The Guc of the Access Policy to edit
   * @param requestBody Model containing the new Access Policy details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyEditApiRequestOptions(
    code: string,
    requestBody: AccessPolicyEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete an Access Policy
   * Deletes a Access Policy based on the information sent in the model
   * @param code The Guc of the Access Policy to delete
   * @returns void
   */
  accessPolicyDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete an Access Policy
   * Deletes a Access Policy based on the information sent in the model
   * @param code The Guc of the Access Policy to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Get a list of Access Policies
   * Fetches a list of Access Policies filtered by the provided parameters
   * @param query Optional query to filter the access policies by
   * @param appliesTo The optional dodi code Guc, if specified, only the designs
   * implementing that interface will be returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns AccessPolicyListWebResponseModel
   */
  accessPolicyList(
    query?: string | null,
    appliesTo?: Array<string> | null,
    page?: number,
    pageSize?: number,
  ): Promise<AccessPolicyListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of Access Policies
   * Fetches a list of Access Policies filtered by the provided parameters
   * @param query Optional query to filter the access policies by
   * @param appliesTo The optional dodi code Guc, if specified, only the designs
   * implementing that interface will be returned
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyListApiRequestOptions(
    query?: string | null,
    appliesTo?: Array<string> | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create an Access Policy
   * Creates an Access Policy based on the information sent in the model
   * @param requestBody Model containing the new Access Policy details
   * @returns AccessPolicyWebModel
   */
  accessPolicyCreate(requestBody: AccessPolicyCreateWebRequestModel): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Create an Access Policy
   * Creates an Access Policy based on the information sent in the model
   * @param requestBody Model containing the new Access Policy details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyCreateApiRequestOptions(
    requestBody: AccessPolicyCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Add a rule to an Access Policy
   * Adds a rule to the specified Access Policy
   * @param code The Guc of the Access Policy to add a rule to
   * @param requestBody Model containing the information of the rule to be added
   * @returns AccessPolicyWebModel
   */
  accessPolicyCreateRule(
    code: string,
    requestBody: AccessPolicyRuleCreateWebRequestModel,
  ): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Add a rule to an Access Policy
   * Adds a rule to the specified Access Policy
   * @param code The Guc of the Access Policy to add a rule to
   * @param requestBody Model containing the information of the rule to be added
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyCreateRuleApiRequestOptions(
    code: string,
    requestBody: AccessPolicyRuleCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Edit a rule in an Access Policy
   * Edit a rule on the specified Access Policy
   * @param code The Guc of the Access Policy to edit a rule on
   * @param id The AId of the rule to edit
   * @param requestBody The model containing the info necessary to edit a rule on the Access Policy
   * @returns AccessPolicyWebModel
   */
  accessPolicyEditRule(
    code: string,
    id: string,
    requestBody: AccessPolicyRuleEditWebRequestModel,
  ): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a rule in an Access Policy
   * Edit a rule on the specified Access Policy
   * @param code The Guc of the Access Policy to edit a rule on
   * @param id The AId of the rule to edit
   * @param requestBody The model containing the info necessary to edit a rule on the Access Policy
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyEditRuleApiRequestOptions(
    code: string,
    id: string,
    requestBody: AccessPolicyRuleEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Remove a rule from an Access Policy
   * Removes a rule to the specified Access Policy
   * @param code The Guc of the Access Policy to remove a rule from
   * @param id The AId of the rule to remove
   * @param signature The signature is used to ensure that the access policy being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same access policy
   * @returns AccessPolicyWebModel
   */
  accessPolicyDeleteRule(
    code: string,
    id: string,
    signature?: string | null,
  ): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove a rule from an Access Policy
   * Removes a rule to the specified Access Policy
   * @param code The Guc of the Access Policy to remove a rule from
   * @param id The AId of the rule to remove
   * @param signature The signature is used to ensure that the access policy being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same access policy
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyDeleteRuleApiRequestOptions(
    code: string,
    id: string,
    signature?: string | null,
  ): ApiRequestOptions;
}
