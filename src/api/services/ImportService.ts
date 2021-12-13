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
   * @param code The Guc to use to fetch the required import
   * @returns ImportGetWebResponseModel
   */
  importGet(code: string): Promise<ImportGetWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get an import by its Guc
   * Finds an import with the specified code
   * @param code The Guc to use to fetch the required import
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importGetApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * Delete the import
   * Deletes the import matching the specified code
   * @param code The Guc of the import to delete
   * @returns void
   */
  importDelete(code: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Delete the import
   * Deletes the import matching the specified code
   * @param code The Guc of the import to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importDeleteApiRequestOptions(code: string): ApiRequestOptions;

  /**
   * List imports
   * List imports
   * @param query Optional query to filter the imports by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ImportListWebResponseModel
   */
  importList(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): Promise<ImportListWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * List imports
   * List imports
   * @param query Optional query to filter the imports by
   * @param page The page number to fetch (1 based)
   * @param pageSize The number of results to return per page
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importListApiRequestOptions(
    query?: string | null,
    page?: number,
    pageSize?: number,
  ): ApiRequestOptions;

  /**
   * Creates import with given name/type and new task for reading data from files.
   * Creates task for import initialisation request.
   * @param requestBody The model containing all necessary data to initialise import
   * @returns ImportInitialiseWebResponseModel
   */
  importImportInitialise(
    requestBody: ImportInitialiseWebRequestModel,
  ): Promise<ImportInitialiseWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Creates import with given name/type and new task for reading data from files.
   * Creates task for import initialisation request.
   * @param requestBody The model containing all necessary data to initialise import
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importImportInitialiseApiRequestOptions(
    requestBody: ImportInitialiseWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Validates import after mode is set and settings populated with matched attributes.
   * User can specify (optional) destination design and collection.
   * Creates task for import validation request.
   * @param code The code of the import to validate
   * @param requestBody The model containing all necessary data to validate import
   * @returns ImportValidateWebResponseModel
   */
  importImportValidate(
    code: string,
    requestBody: ImportValidateWebRequestModel,
  ): Promise<ImportValidateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Validates import after mode is set and settings populated with matched attributes.
   * User can specify (optional) destination design and collection.
   * Creates task for import validation request.
   * @param code The code of the import to validate
   * @param requestBody The model containing all necessary data to validate import
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importImportValidateApiRequestOptions(
    code: string,
    requestBody: ImportValidateWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Commits the valid import items.
   * Creates task for import commit request.
   * @param code The code of the import to validate
   * @returns ImportCommitWebResponseModel
   */
  importImportCommit(code: string): Promise<ImportCommitWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Commits the valid import items.
   * Creates task for import commit request.
   * @param code The code of the import to validate
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  importImportCommitApiRequestOptions(code: string): ApiRequestOptions;
}
