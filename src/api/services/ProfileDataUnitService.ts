/* eslint-disable */

import type { ProfileDataScope } from '../models/ProfileDataScope';
import type { ProfileDataUnitListWebResponseModel } from '../models/ProfileDataUnitListWebResponseModel';
import type { ProfileDataUnitUpsertWebRequestModel } from '../models/ProfileDataUnitUpsertWebRequestModel';
import type { ProfileDataUnitWebModel } from '../models/ProfileDataUnitWebModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ProfileDataUnitService {
  /**
   * Get a list of ProfileData
   * Fetches a list of ProfileData optionally specifying page and the number of results to return per page.
   * @returns ProfileDataUnitListWebResponseModel
   */
  profileDataUnitList({
    discriminator,
    dataScopes,
    page,
    pageSize,
  }: {
    /** Optionally, the type of data to return as specified by the discriminators on ProfileDataUnitValueWebModelBase **/
    discriminator?: string | null;
    /** Optionally, the data scope to filter by to get only Customer (Global) level profile data or only User level ones **/
    dataScopes?: Array<ProfileDataScope | null> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ProfileDataUnitListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of ProfileData
   * Fetches a list of ProfileData optionally specifying page and the number of results to return per page.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitListApiRequestOptions({
    discriminator,
    dataScopes,
    page,
    pageSize,
  }: {
    /** Optionally, the type of data to return as specified by the discriminators on ProfileDataUnitValueWebModelBase **/
    discriminator?: string | null;
    /** Optionally, the data scope to filter by to get only Customer (Global) level profile data or only User level ones **/
    dataScopes?: Array<ProfileDataScope | null> | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Get a profile data unit
   * @returns ProfileDataUnitWebModel
   */
  profileDataUnitGet({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to fetch **/
    key: string;
    /** The scope of the profile data unit to fetch **/
    dataScope?: ProfileDataScope;
  }): Promise<ProfileDataUnitWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a profile data unit
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitGetApiRequestOptions({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to fetch **/
    key: string;
    /** The scope of the profile data unit to fetch **/
    dataScope?: ProfileDataScope;
  }): ApiRequestOptions;

  /**
   * Upsert a profile data unit
   * Sets the value of an existing profile data unit. If unit does not exist it is created.
   * @returns ProfileDataUnitWebModel
   */
  profileDataUnitUpsert({
    key,
    requestBody,
  }: {
    /** The key of the data unit to upsert **/
    key: string;
    /** Model containing the set profile data unit details **/
    requestBody: ProfileDataUnitUpsertWebRequestModel;
  }): Promise<ProfileDataUnitWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Upsert a profile data unit
   * Sets the value of an existing profile data unit. If unit does not exist it is created.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitUpsertApiRequestOptions({
    key,
    requestBody,
  }: {
    /** The key of the data unit to upsert **/
    key: string;
    /** Model containing the set profile data unit details **/
    requestBody: ProfileDataUnitUpsertWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Delete a profile data unit
   * @returns void
   */
  profileDataUnitDelete({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to delete **/
    key: string;
    /** The scope of the profile data unit to delete **/
    dataScope?: ProfileDataScope;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a profile data unit
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitDeleteApiRequestOptions({
    key,
    dataScope,
  }: {
    /** The key of the profile data unit to delete **/
    key: string;
    /** The scope of the profile data unit to delete **/
    dataScope?: ProfileDataScope;
  }): ApiRequestOptions;
}
