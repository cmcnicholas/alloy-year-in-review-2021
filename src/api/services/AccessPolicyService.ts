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
   * @returns AccessPolicyWebModel
   */
  accessPolicyGet({
    code,
  }: {
    /** The Guc for the Access Policy being requested **/
    code: string;
  }): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an Access Policy by its code
   * Fetches an Access Policy by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the Access Policy being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit an Access Policy
   * Edits an Access Policy based on the information sent in the model
   * @returns AccessPolicyWebModel
   */
  accessPolicyEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit **/
    code: string;
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyEditWebRequestModel;
  }): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit an Access Policy
   * Edits an Access Policy based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit **/
    code: string;
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete an Access Policy
   * Deletes a Access Policy based on the information sent in the model
   * @returns void
   */
  accessPolicyDelete({
    code,
  }: {
    /** The Guc of the Access Policy to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete an Access Policy
   * Deletes a Access Policy based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the Access Policy to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Get a list of Access Policies
   * Fetches a list of Access Policies filtered by the provided parameters
   * @returns AccessPolicyListWebResponseModel
   */
  accessPolicyList({
    query,
    appliesTo,
    page,
    pageSize,
  }: {
    /** Optional query to filter the access policies by **/
    query?: string | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    appliesTo?: Array<string> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<AccessPolicyListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of Access Policies
   * Fetches a list of Access Policies filtered by the provided parameters
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyListApiRequestOptions({
    query,
    appliesTo,
    page,
    pageSize,
  }: {
    /** Optional query to filter the access policies by **/
    query?: string | null;
    /** The optional dodi code Guc, if specified, only the designs
     * implementing that interface will be returned **/
    appliesTo?: Array<string> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create an Access Policy
   * Creates an Access Policy based on the information sent in the model
   * @returns AccessPolicyWebModel
   */
  accessPolicyCreate({
    requestBody,
  }: {
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyCreateWebRequestModel;
  }): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Create an Access Policy
   * Creates an Access Policy based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new Access Policy details **/
    requestBody: AccessPolicyCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Add a rule to an Access Policy
   * Adds a rule to the specified Access Policy
   * @returns AccessPolicyWebModel
   */
  accessPolicyCreateRule({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to add a rule to **/
    code: string;
    /** Model containing the information of the rule to be added **/
    requestBody: AccessPolicyRuleCreateWebRequestModel;
  }): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Add a rule to an Access Policy
   * Adds a rule to the specified Access Policy
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyCreateRuleApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the Access Policy to add a rule to **/
    code: string;
    /** Model containing the information of the rule to be added **/
    requestBody: AccessPolicyRuleCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Edit a rule in an Access Policy
   * Edit a rule on the specified Access Policy
   * @returns AccessPolicyWebModel
   */
  accessPolicyEditRule({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit a rule on **/
    code: string;
    /** The AId of the rule to edit **/
    id: string;
    /** The model containing the info necessary to edit a rule on the Access Policy **/
    requestBody: AccessPolicyRuleEditWebRequestModel;
  }): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a rule in an Access Policy
   * Edit a rule on the specified Access Policy
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyEditRuleApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the Access Policy to edit a rule on **/
    code: string;
    /** The AId of the rule to edit **/
    id: string;
    /** The model containing the info necessary to edit a rule on the Access Policy **/
    requestBody: AccessPolicyRuleEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove a rule from an Access Policy
   * Removes a rule to the specified Access Policy
   * @returns AccessPolicyWebModel
   */
  accessPolicyDeleteRule({
    code,
    id,
    signature,
  }: {
    /** The Guc of the Access Policy to remove a rule from **/
    code: string;
    /** The AId of the rule to remove **/
    id: string;
    /** The signature is used to ensure that the access policy being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same access policy **/
    signature: string | null;
  }): Promise<AccessPolicyWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Remove a rule from an Access Policy
   * Removes a rule to the specified Access Policy
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  accessPolicyDeleteRuleApiRequestOptions({
    code,
    id,
    signature,
  }: {
    /** The Guc of the Access Policy to remove a rule from **/
    code: string;
    /** The AId of the rule to remove **/
    id: string;
    /** The signature is used to ensure that the access policy being edited is actually the one provided to the system.
     * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same access policy **/
    signature: string | null;
  }): ApiRequestOptions;
}
