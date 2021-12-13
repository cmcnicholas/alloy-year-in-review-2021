/* eslint-disable */

import type { CreateSessionFromIdTokenWebRequest } from '../models/CreateSessionFromIdTokenWebRequest';
import type { SessionCreateOAuthUrlWebRequest } from '../models/SessionCreateOAuthUrlWebRequest';
import type { SessionCreateOAuthUrlWebResponse } from '../models/SessionCreateOAuthUrlWebResponse';
import type { SessionCreateWebResponseModel } from '../models/SessionCreateWebResponseModel';
import type { SessionMasterCreateWebRequestModel } from '../models/SessionMasterCreateWebRequestModel';
import type { UserSessionGetWebResponseModel } from '../models/UserSessionGetWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface SessionService {
  /**
   * Get session info
   * Returns the session matching the provided token
   * @returns UserSessionGetWebResponseModel
   */
  sessionGet(): Promise<UserSessionGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get session info
   * Returns the session matching the provided token
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  sessionGetApiRequestOptions(): ApiRequestOptions;

  /**
   * Create a master session
   * This endpoint is used to login into alloy and get a valid master session. A master session gives access to a very limited
   * subset of the Alloy Api and is especially useful to fetch the customers that the logged in user has access to. It is then possible
   * to use one of the retrieved customer codes to create a customer session
   * @param requestBody The model containing the information about the master session to be created
   * @returns SessionCreateWebResponseModel
   */
  sessionCreate(
    requestBody: SessionMasterCreateWebRequestModel,
  ): Promise<SessionCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Create a master session
   * This endpoint is used to login into alloy and get a valid master session. A master session gives access to a very limited
   * subset of the Alloy Api and is especially useful to fetch the customers that the logged in user has access to. It is then possible
   * to use one of the retrieved customer codes to create a customer session
   * @param requestBody The model containing the information about the master session to be created
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  sessionCreateApiRequestOptions(
    requestBody: SessionMasterCreateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a session
   * Deletes a session, logging out the user
   * @returns void
   */
  sessionDelete(): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a session
   * Deletes a session, logging out the user
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  sessionDeleteApiRequestOptions(): ApiRequestOptions;

  /**
   * Get a customer session
   * The customer session gives access to the alloy api and defines the customer that the logged in user is working on
   * @param customerCode The Guc of the customer to log into
   * @returns SessionCreateWebResponseModel
   */
  sessionCreate2(customerCode: string): Promise<SessionCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a customer session
   * The customer session gives access to the alloy api and defines the customer that the logged in user is working on
   * @param customerCode The Guc of the customer to log into
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  sessionCreate2ApiRequestOptions(customerCode: string): ApiRequestOptions;

  /**
   * Generates an OAuth provider sign-in url. Supply the final redirect URLs for success or failure.
   * This endpoint generates a fully qualified url to an OAuth provider specified as a parameter.
   * On calling the url, the user will be faced with authentication provided by the service.
   * A successful challenge will return to the success url specified as a parameter and the Alloy session token will be included in the redirect.
   * @param requestBody The model gives the OAuth provider and the success and failure URLs
   * @returns SessionCreateOAuthUrlWebResponse
   */
  sessionCreateOAuthUrl(
    requestBody: SessionCreateOAuthUrlWebRequest,
  ): Promise<SessionCreateOAuthUrlWebResponse>;

  /**
   * **used to get the request options without making a http request**
   * Generates an OAuth provider sign-in url. Supply the final redirect URLs for success or failure.
   * This endpoint generates a fully qualified url to an OAuth provider specified as a parameter.
   * On calling the url, the user will be faced with authentication provided by the service.
   * A successful challenge will return to the success url specified as a parameter and the Alloy session token will be included in the redirect.
   * @param requestBody The model gives the OAuth provider and the success and failure URLs
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  sessionCreateOAuthUrlApiRequestOptions(
    requestBody: SessionCreateOAuthUrlWebRequest,
  ): ApiRequestOptions;

  /**
   * Uses OAuth provider id token to return an Alloy session token on success
   * Return an Alloy Master Session token by reading the user's email from the given OAuth id token
   * @param requestBody The model giving the OAuth provider and the id token
   * @returns SessionCreateWebResponseModel
   */
  sessionCreateSessionFromIdToken(
    requestBody: CreateSessionFromIdTokenWebRequest,
  ): Promise<SessionCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Uses OAuth provider id token to return an Alloy session token on success
   * Return an Alloy Master Session token by reading the user's email from the given OAuth id token
   * @param requestBody The model giving the OAuth provider and the id token
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  sessionCreateSessionFromIdTokenApiRequestOptions(
    requestBody: CreateSessionFromIdTokenWebRequest,
  ): ApiRequestOptions;
}
