/* eslint-disable */

import type { ApplicableTypeAddWebRequestModel } from '../models/ApplicableTypeAddWebRequestModel';
import type { ApplicableTypeFromItemsViaWebRequestModel } from '../models/ApplicableTypeFromItemsViaWebRequestModel';
import type { ApplicableTypeFromWebRequestModel } from '../models/ApplicableTypeFromWebRequestModel';
import type { ApplicableTypeFromWebResponseModel } from '../models/ApplicableTypeFromWebResponseModel';
import type { ApplicableTypeRemoveWebRequestModel } from '../models/ApplicableTypeRemoveWebRequestModel';
import type { ApplicableTypeToWebRequestModel } from '../models/ApplicableTypeToWebRequestModel';
import type { ApplicableTypeToWebResponseModel } from '../models/ApplicableTypeToWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ApplicableTypesService {
  /**
   * List applicable to types
   * @returns ApplicableTypeToWebResponseModel
   */
  applicableTypesApplicableTo({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeToWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApplicableTypeToWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List applicable to types
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  applicableTypesApplicableToApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeToWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * List applicable from types to items
   * @returns ApplicableTypeFromWebResponseModel
   */
  applicableTypesApplicableFromItems({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApplicableTypeFromWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List applicable from types to items
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  applicableTypesApplicableFromItemsApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * List applicable from types to items via
   * @returns ApplicableTypeFromWebResponseModel
   */
  applicableTypesApplicableFromViaItems({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromItemsViaWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ApplicableTypeFromWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List applicable from types to items via
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  applicableTypesApplicableFromViaItemsApiRequestOptions({
    requestBody,
    page,
    pageSize,
  }: {
    requestBody: ApplicableTypeFromItemsViaWebRequestModel;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Add applicable types
   * @returns void
   */
  applicableTypesAdd({
    requestBody,
  }: {
    requestBody: ApplicableTypeAddWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Add applicable types
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  applicableTypesAddApiRequestOptions({
    requestBody,
  }: {
    requestBody: ApplicableTypeAddWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Remove applicable types
   * @returns void
   */
  applicableTypesRemove({
    requestBody,
  }: {
    requestBody: ApplicableTypeRemoveWebRequestModel;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Remove applicable types
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  applicableTypesRemoveApiRequestOptions({
    requestBody,
  }: {
    requestBody: ApplicableTypeRemoveWebRequestModel;
  }): ApiRequestOptions;
}
