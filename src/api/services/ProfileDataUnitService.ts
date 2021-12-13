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
   * @param discriminator Optionally, the type of data to return as specified by the discriminators on ProfileDataUnitValueWebModelBase
   * @param dataScopes Optionally, the data scope to filter by to get only Customer (Global) level profile data or only User level ones
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ProfileDataUnitListWebResponseModel
   */
  profileDataUnitList(
    discriminator?: string | null,
    dataScopes?: Array<ProfileDataScope | null> | null,
    page?: number,
    pageSize?: number,
  ): Promise<ProfileDataUnitListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a list of ProfileData
   * Fetches a list of ProfileData optionally specifying page and the number of results to return per page.
   * @param discriminator Optionally, the type of data to return as specified by the discriminators on ProfileDataUnitValueWebModelBase
   * @param dataScopes Optionally, the data scope to filter by to get only Customer (Global) level profile data or only User level ones
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitListApiRequestOptions(
    discriminator?: string | null,
    dataScopes?: Array<ProfileDataScope | null> | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Get a profile data unit
   * @param key The key of the profile data unit to fetch
   * @param dataScope The scope of the profile data unit to fetch
   * @returns ProfileDataUnitWebModel
   */
  profileDataUnitGet(key: string, dataScope?: ProfileDataScope): Promise<ProfileDataUnitWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Get a profile data unit
   * @param key The key of the profile data unit to fetch
   * @param dataScope The scope of the profile data unit to fetch
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitGetApiRequestOptions(key: string, dataScope?: ProfileDataScope): ApiRequestOptions;

  /**
   * Upsert a profile data unit
   * Sets the value of an existing profile data unit. If unit does not exist it is created.
   * @param key The key of the data unit to upsert
   * @param requestBody Model containing the set profile data unit details
   * @returns ProfileDataUnitWebModel
   */
  profileDataUnitUpsert(
    key: string,
    requestBody: ProfileDataUnitUpsertWebRequestModel,
  ): Promise<ProfileDataUnitWebModel>;

  /**
   * **used to get the request options without making a http request**
   * Upsert a profile data unit
   * Sets the value of an existing profile data unit. If unit does not exist it is created.
   * @param key The key of the data unit to upsert
   * @param requestBody Model containing the set profile data unit details
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitUpsertApiRequestOptions(
    key: string,
    requestBody: ProfileDataUnitUpsertWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Delete a profile data unit
   * @param key The key of the profile data unit to delete
   * @param dataScope The scope of the profile data unit to delete
   * @returns void
   */
  profileDataUnitDelete(key: string, dataScope?: ProfileDataScope): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete a profile data unit
   * @param key The key of the profile data unit to delete
   * @param dataScope The scope of the profile data unit to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  profileDataUnitDeleteApiRequestOptions(
    key: string,
    dataScope?: ProfileDataScope,
  ): ApiRequestOptions;
}
