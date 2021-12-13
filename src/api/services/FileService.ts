/* eslint-disable */

import type { BulkFileDownloadGetFileWebResponseModel } from '../models/BulkFileDownloadGetFileWebResponseModel';
import type { FileBulkDownloadWebRequestModel } from '../models/FileBulkDownloadWebRequestModel';
import type { FileBulkDownloadWebResponseModel } from '../models/FileBulkDownloadWebResponseModel';
import type { FileCreateWebResponseModel } from '../models/FileCreateWebResponseModel';
import type { FileMoveWebRequestModel } from '../models/FileMoveWebRequestModel';
import type { FileMoveWebResponseModel } from '../models/FileMoveWebResponseModel';
import type { ResizeFitMode } from '../models/ResizeFitMode';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';

export interface FileService {
  /**
   * Download a file
   * @param id The AId of the file to download
   * @param applyContentDispositionHeader If true, the content disposition header will be returned and the
   * download will be seen as a file download by the browser. If false, the header won't be returned and the image will be displayed as is
   * If false, the header won't be returned and the image will be displayed as is
   * @returns any
   */
  fileDownload(id: string, applyContentDispositionHeader: boolean): Promise<any>;

  /**
   * **used to get the request options without making a http request**
   * Download a file
   * @param id The AId of the file to download
   * @param applyContentDispositionHeader If true, the content disposition header will be returned and the
   * download will be seen as a file download by the browser. If false, the header won't be returned and the image will be displayed as is
   * If false, the header won't be returned and the image will be displayed as is
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileDownloadApiRequestOptions(
    id: string,
    applyContentDispositionHeader: boolean,
  ): ApiRequestOptions;

  /**
   * Deletes a file
   * @param id The AId of the file to delete
   * @returns void
   */
  fileDelete(id: string): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes a file
   * @param id The AId of the file to delete
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileDeleteApiRequestOptions(id: string): ApiRequestOptions;

  /**
   * Download a file thumbnail
   * @param id The AId of the file to download a thumbnail of
   * @param width The height of the thumbnail
   * @param height The height of the thumbnail
   * @param mode The mode to use to resize the image
   * @param applyContentDispositionHeader If true, the content disposition header will be returned, triggering a file download from the browser.
   * If false, the header won't be returned and the image will be displayed as is
   * @returns any
   */
  fileDownloadThumbnail(
    id: string,
    width?: number,
    height?: number,
    mode?: ResizeFitMode,
    applyContentDispositionHeader?: boolean,
  ): Promise<any>;

  /**
   * **used to get the request options without making a http request**
   * Download a file thumbnail
   * @param id The AId of the file to download a thumbnail of
   * @param width The height of the thumbnail
   * @param height The height of the thumbnail
   * @param mode The mode to use to resize the image
   * @param applyContentDispositionHeader If true, the content disposition header will be returned, triggering a file download from the browser.
   * If false, the header won't be returned and the image will be displayed as is
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileDownloadThumbnailApiRequestOptions(
    id: string,
    width?: number,
    height?: number,
    mode?: ResizeFitMode,
    applyContentDispositionHeader?: boolean,
  ): ApiRequestOptions;

  /**
   * Upload a file
   * @param folderItemId The AId of the item representing the folder to upload to
   * If not specified, the file will be uploaded to the folder of the user that is uploading
   * @returns FileCreateWebResponseModel
   */
  fileUpload(folderItemId?: string | null): Promise<FileCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Upload a file
   * @param folderItemId The AId of the item representing the folder to upload to
   * If not specified, the file will be uploaded to the folder of the user that is uploading
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileUploadApiRequestOptions(folderItemId?: string | null): ApiRequestOptions;

  /**
   * Moves a file to a folder with a given id
   * @param id The AId of the file to move
   * @param requestBody The move file model
   * @returns FileMoveWebResponseModel
   */
  fileMove(id: string, requestBody: FileMoveWebRequestModel): Promise<FileMoveWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Moves a file to a folder with a given id
   * @param id The AId of the file to move
   * @param requestBody The move file model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileMoveApiRequestOptions(id: string, requestBody: FileMoveWebRequestModel): ApiRequestOptions;

  /**
   * Starts a task that prepares a zip archive containing files matching the provided aqs query
   * @param requestBody The bulk file download model
   * @returns FileBulkDownloadWebResponseModel
   */
  fileBulkFileDownload(
    requestBody: FileBulkDownloadWebRequestModel,
  ): Promise<FileBulkDownloadWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Starts a task that prepares a zip archive containing files matching the provided aqs query
   * @param requestBody The bulk file download model
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileBulkFileDownloadApiRequestOptions(
    requestBody: FileBulkDownloadWebRequestModel,
  ): ApiRequestOptions;

  /**
   * Get the file AId for the bulk file download once completed
   * Finds the file id for the given task or returns not found
   * @param id The id of the bulk file download task
   * @returns BulkFileDownloadGetFileWebResponseModel
   */
  fileGetFileId(id: string): Promise<BulkFileDownloadGetFileWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the file AId for the bulk file download once completed
   * Finds the file id for the given task or returns not found
   * @param id The id of the bulk file download task
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileGetFileIdApiRequestOptions(id: string): ApiRequestOptions;
}
