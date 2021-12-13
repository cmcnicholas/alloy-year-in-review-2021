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
   * @param code The Guc for the card being requested
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardGet(code: string): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a card by its code
   * Fetches a card by its globally unique code (Guc).
   * @param code The Guc for the card being requested
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Edit a card
   * Edits a card based on the information sent in the model
   * @param code The Guc of the card to edit
   * @param requestBody Model containing the new card details
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardEdit(
    code: string,
    requestBody: CardEditWebRequestModel,
  ): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit a card
   * Edits a card based on the information sent in the model
   * @param code The Guc of the card to edit
   * @param requestBody Model containing the new card details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardEditApiRequestOptions(code: string, requestBody: CardEditWebRequestModel): ApiRequestOptions;

  /**
   * Delete a card
   * Deletes a card based on the information sent in the model
   * @param code The Guc of the card to delete
   * @returns void
   */
  cardDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a card
   * Deletes a card based on the information sent in the model
   * @param code The Guc of the card to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Get a list of cards
   * Fetches a list of cards optionally specifying page and the number of results to return per page.
   * @param query Optional query to filter the cards by
   * @param userGroup Optional Guc to filter cards by. If specified, only the cards
   * that have this user group code within their permissions are returned
   * @param context The optional cards context to filter on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns CardListWebResponseModel
   */
  cardList(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): Promise<CardListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of cards
   * Fetches a list of cards optionally specifying page and the number of results to return per page.
   * @param query Optional query to filter the cards by
   * @param userGroup Optional Guc to filter cards by. If specified, only the cards
   * that have this user group code within their permissions are returned
   * @param context The optional cards context to filter on
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardListApiRequestOptions(
    query?: string | null,
    userGroup?: string | null,
    context?: Context | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Create a card
   * Creates a card based on the information sent in the model
   * @param requestBody Model containing the new card details
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardCreate(
    requestBody: CardCreateWebRequestModel,
  ): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a card
   * Creates a card based on the information sent in the model
   * @param requestBody Model containing the new card details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardCreateApiRequestOptions(requestBody: CardCreateWebRequestModel): ApiRequestOptions;

  /**
   * Reset a card query
   * @param code The Guc of the card to reset the query for
   * @param id The AId of the query to reset
   * @param requestBody The model containing the information necessary to reset a card query
   * @returns CardWithOperationsSummaryWebResponseModel
   */
  cardResetQuery(
    code: string,
    id: string,
    requestBody: CardQueryResetWebRequestModel,
  ): Promise<CardWithOperationsSummaryWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Reset a card query
   * @param code The Guc of the card to reset the query for
   * @param id The AId of the query to reset
   * @param requestBody The model containing the information necessary to reset a card query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardResetQueryApiRequestOptions(
    code: string,
    id: string,
    requestBody: CardQueryResetWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Get a card permissions by its code
   * Fetches the permissions of a card by its Guc
   * @param code The Guc for the card whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns CardPermissionsGetWebResponseModel
   */
  cardGetPermissions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): Promise<CardPermissionsGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a card permissions by its code
   * Fetches the permissions of a card by its Guc
   * @param code The Guc for the card whose permissions are being requested
   * @param username Optional username to get permissions for the specific user.
   * This value is mutually exclusive with Role.
   * @param role Optional role to get permissions for the specific role.
   * This value is mutually exclusive with Username.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardGetPermissionsApiRequestOptions(
    code: string,
    username?: string | null,
    role?: string | null,
  ): ApiRequestOptions;

  /**
   * Edit permissions for a card
   * Edit the permissions on the card with the specified code
   * @param code The Guc of the card to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns CardWithPermissionsWebResponseModel
   */
  cardEditPermissions(
    code: string,
    requestBody: CardPermissionsEditWebRequestModel,
  ): Promise<CardWithPermissionsWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Edit permissions for a card
   * Edit the permissions on the card with the specified code
   * @param code The Guc of the card to edit the permissions of
   * @param requestBody The model containing the info necessary to the edit permissions operation
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardEditPermissionsApiRequestOptions(
    code: string,
    requestBody: CardPermissionsEditWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Lists user cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get card access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns CardAccessAdvisorByUserListWebResponseModel
   */
  cardCardAccessAdvisorByUser(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<CardAccessAdvisorByUserListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists user cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @param username The name of the user to get card access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardCardAccessAdvisorByUserApiRequestOptions(
    username: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Lists role cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get card access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns CardAccessAdvisorByRoleListWebResponseModel
   */
  cardCardAccessAdvisorByRole(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<CardAccessAdvisorByRoleListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Lists role cards with their winning permission
   * Fetches a list of cards with winning permission optionally specifying page and the number of results to return per page.
   * @param code The code of the role to get card access advisor for
   * @param query Optional query (full or partial feature name) to filter the results by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  cardCardAccessAdvisorByRoleApiRequestOptions(
    code: string,
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;
}
