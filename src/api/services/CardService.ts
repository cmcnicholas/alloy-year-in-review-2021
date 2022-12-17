/* eslint-disable */

import type { CardAccessAdvisorByRoleListWebResponseModel } from '../models/CardAccessAdvisorByRoleListWebResponseModel';
import type { CardAccessAdvisorByUserListWebResponseModel } from '../models/CardAccessAdvisorByUserListWebResponseModel';
import type { CardCreateWebRequestModel } from '../models/CardCreateWebRequestModel';
import type { CardEditWebRequestModel } from '../models/CardEditWebRequestModel';
import type { CardListWebResponseModel } from '../models/CardListWebResponseModel';
import type { CardPermissionsEditWebRequestModel } from '../models/CardPermissionsEditWebRequestModel';
import type { CardPermissionsGetWebResponseModel } from '../models/CardPermissionsGetWebResponseModel';
import type { CardQueryResetWebRequestModel } from '../models/CardQueryResetWebRequestModel';
import type { CardWithOperationsSummaryWebResponseModel } from '../models/CardWithOperationsSummaryWebResponseModel';
import type { CardWithPermissionsWebResponseModel } from '../models/CardWithPermissionsWebResponseModel';
import type { Context } from '../models/Context';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface CardService {
  /**
   * Get a card by its code
   * Fetches a card by its globally unique code (Guc).
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardGet({
    code,
  }: {
    /** The Guc for the card being requested **/
    code: string;
  }): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a card by its code
   * Fetches a card by its globally unique code (Guc).
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardGetApiRequestOptions({
    code,
  }: {
    /** The Guc for the card being requested **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Edit a card
   * Edits a card based on the information sent in the model
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardEdit({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit **/
    code: string;
    /** Model containing the new card details **/
    requestBody: CardEditWebRequestModel;
  }): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a card
   * Edits a card based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardEditApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit **/
    code: string;
    /** Model containing the new card details **/
    requestBody: CardEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a card
   * Deletes a card based on the information sent in the model
   * @returns void
   */
  cardDelete({
    code,
  }: {
    /** The Guc of the card to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a card
   * Deletes a card based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the card to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Get a list of cards
   * Fetches a list of cards optionally specifying page and the number of results to return per page.
   * @returns CardListWebResponseModel
   */
  cardList({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the cards by **/
    query?: string | null;
    /** Optional Guc to filter cards by. If specified, only the cards
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional cards context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CardListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of cards
   * Fetches a list of cards optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardListApiRequestOptions({
    query,
    userGroup,
    context,
    page,
    pageSize,
  }: {
    /** Optional query to filter the cards by **/
    query?: string | null;
    /** Optional Guc to filter cards by. If specified, only the cards
     * that have this user group code within their permissions are returned **/
    userGroup?: string | null;
    /** The optional cards context to filter on **/
    context?: Context | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Create a card
   * Creates a card based on the information sent in the model
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardCreate({
    requestBody,
  }: {
    /** Model containing the new card details **/
    requestBody: CardCreateWebRequestModel;
  }): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a card
   * Creates a card based on the information sent in the model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardCreateApiRequestOptions({
    requestBody,
  }: {
    /** Model containing the new card details **/
    requestBody: CardCreateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Reset a card query
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardResetQuery({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the card to reset the query for **/
    code: string;
    /** The AId of the query to reset **/
    id: string;
    /** The model containing the information necessary to reset a card query **/
    requestBody: CardQueryResetWebRequestModel;
  }): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Reset a card query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardResetQueryApiRequestOptions({
    code,
    id,
    requestBody,
  }: {
    /** The Guc of the card to reset the query for **/
    code: string;
    /** The AId of the query to reset **/
    id: string;
    /** The model containing the information necessary to reset a card query **/
    requestBody: CardQueryResetWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get a card permissions by its code
   * Fetches the permissions of a card by its Guc
   * @returns CardPermissionsGetWebResponseModel
   */
  cardGetPermissions({
    code,
    username,
    role,
  }: {
    /** The Guc for the card whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): Promise<CardPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a card permissions by its code
   * Fetches the permissions of a card by its Guc
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardGetPermissionsApiRequestOptions({
    code,
    username,
    role,
  }: {
    /** The Guc for the card whose permissions are being requested **/
    code: string;
    /** Optional username to get permissions for the specific user.
     * This value is mutually exclusive with Role. **/
    username?: string | null;
    /** Optional role to get permissions for the specific role.
     * This value is mutually exclusive with Username. **/
    role?: string | null;
  }): ApiRequestOptions;

  /**
   * Edit permissions for a card
   * Edit the permissions on the card with the specified code
   * @returns CardWithPermissionsWebResponseModel
   */
  cardEditPermissions({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: CardPermissionsEditWebRequestModel;
  }): Promise<CardWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a card
   * Edit the permissions on the card with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardEditPermissionsApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The Guc of the card to edit the permissions of **/
    code: string;
    /** The model containing the info necessary to the edit permissions operation **/
    requestBody: CardPermissionsEditWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Lists user cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @returns CardAccessAdvisorByUserListWebResponseModel
   */
  cardCardAccessAdvisorByUser({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get card access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CardAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardCardAccessAdvisorByUserApiRequestOptions({
    username,
    query,
    page,
    pageSize,
  }: {
    /** The name of the user to get card access advisor for **/
    username: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Lists role cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @returns CardAccessAdvisorByRoleListWebResponseModel
   */
  cardCardAccessAdvisorByRole({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get card access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<CardAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardCardAccessAdvisorByRoleApiRequestOptions({
    code,
    query,
    page,
    pageSize,
  }: {
    /** The code of the role to get card access advisor for **/
    code: string;
    /** Optional query (full or partial feature name) to filter the results by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;
}
