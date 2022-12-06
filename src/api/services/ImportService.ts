/* eslint-disable */

import type { ImportCommitWebResponseModel } from '../models/ImportCommitWebResponseModel';
import type { ImportGetWebResponseModel } from '../models/ImportGetWebResponseModel';
import type { ImportInitialiseWebRequestModel } from '../models/ImportInitialiseWebRequestModel';
import type { ImportInitialiseWebResponseModel } from '../models/ImportInitialiseWebResponseModel';
import type { ImportListWebResponseModel } from '../models/ImportListWebResponseModel';
import type { ImportValidateWebRequestModel } from '../models/ImportValidateWebRequestModel';
import type { ImportValidateWebResponseModel } from '../models/ImportValidateWebResponseModel';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface ImportService {
  /**
   * Get an import by its Guc
   * Finds an import with the specified code
   * @returns ImportGetWebResponseModel
   */
  importGet({
    code,
  }: {
    /** The Guc to use to fetch the required import **/
    code: string;
  }): Promise<ImportGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an import by its Guc
   * Finds an import with the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importGetApiRequestOptions({
    code,
  }: {
    /** The Guc to use to fetch the required import **/
    code: string;
  }): ApiRequestOptions;

  /**
   * Delete the import
   * Deletes the import matching the specified code
   * @returns void
   */
  importDelete({
    code,
  }: {
    /** The Guc of the import to delete **/
    code: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete the import
   * Deletes the import matching the specified code
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importDeleteApiRequestOptions({
    code,
  }: {
    /** The Guc of the import to delete **/
    code: string;
  }): ApiRequestOptions;

  /**
   * List imports
   * List imports
   * @returns ImportListWebResponseModel
   */
  importList({
    query,
    page,
    pageSize,
  }: {
    /** Optional query to filter the imports by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): Promise<ImportListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List imports
   * List imports
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importListApiRequestOptions({
    query,
    page,
    pageSize,
  }: {
    /** Optional query to filter the imports by **/
    query?: string | null;
    /** The page number to fetch (1 based) **/
    page?: number;
    /** The number of results to return per page **/
    pageSize?: number;
  }): ApiRequestOptions;

  /**
   * Creates import with given name/type and new task for reading data from files.
   * Creates task for import initialisation request.
   * @returns ImportInitialiseWebResponseModel
   */
  importImportInitialise({
    requestBody,
  }: {
    /** The model containing all necessary data to initialise import **/
    requestBody: ImportInitialiseWebRequestModel;
  }): Promise<ImportInitialiseWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates import with given name/type and new task for reading data from files.
   * Creates task for import initialisation request.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importImportInitialiseApiRequestOptions({
    requestBody,
  }: {
    /** The model containing all necessary data to initialise import **/
    requestBody: ImportInitialiseWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Validates import after mode is set and settings populated with matched attributes.
   * User can specify (optional) destination design and collection.
   * Creates task for import validation request.
   * @returns ImportValidateWebResponseModel
   */
  importImportValidate({
    code,
    requestBody,
  }: {
    /** The code of the import to validate **/
    code: string;
    /** The model containing all necessary data to validate import **/
    requestBody: ImportValidateWebRequestModel;
  }): Promise<ImportValidateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Validates import after mode is set and settings populated with matched attributes.
   * User can specify (optional) destination design and collection.
   * Creates task for import validation request.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importImportValidateApiRequestOptions({
    code,
    requestBody,
  }: {
    /** The code of the import to validate **/
    code: string;
    /** The model containing all necessary data to validate import **/
    requestBody: ImportValidateWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Commits the valid import items.
   * Creates task for import commit request.
   * @returns ImportCommitWebResponseModel
   */
  importImportCommit({
    code,
  }: {
    /** The code of the import to validate **/
    code: string;
  }): Promise<ImportCommitWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Commits the valid import items.
   * Creates task for import commit request.
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importImportCommitApiRequestOptions({
    code,
  }: {
    /** The code of the import to validate **/
    code: string;
  }): ApiRequestOptions;
}
