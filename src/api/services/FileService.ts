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
   * @returns any
   */
  fileDownload({
    id,
    applyContentDispositionHeader = true,
  }: {
    /** The AId of the file to download **/
    id: string;
    /** If true, the content disposition header will be returned and the
     * download will be seen as a file download by the browser. If false, the header won't be returned and the image will be displayed as is
     * If false, the header won't be returned and the image will be displayed as is **/
    applyContentDispositionHeader?: boolean;
  }): Promise<any>;

  /**
   * **used to get the request options without making a http request**
   * Download a file
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileDownloadApiRequestOptions({
    id,
    applyContentDispositionHeader = true,
  }: {
    /** The AId of the file to download **/
    id: string;
    /** If true, the content disposition header will be returned and the
     * download will be seen as a file download by the browser. If false, the header won't be returned and the image will be displayed as is
     * If false, the header won't be returned and the image will be displayed as is **/
    applyContentDispositionHeader?: boolean;
  }): ApiRequestOptions;

  /**
   * Deletes a file
   * @returns void
   */
  fileDelete({
    id,
  }: {
    /** The AId of the file to delete **/
    id: string;
  }): Promise<void>;

  /**
   * **used to get the request options without making a http request**
   * Deletes a file
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileDeleteApiRequestOptions({
    id,
  }: {
    /** The AId of the file to delete **/
    id: string;
  }): ApiRequestOptions;

  /**
   * Download a file thumbnail
   * @returns any
   */
  fileDownloadThumbnail({
    id,
    width,
    height,
    mode,
    applyContentDispositionHeader,
  }: {
    /** The AId of the file to download a thumbnail of **/
    id: string;
    /** The height of the thumbnail **/
    width?: number;
    /** The height of the thumbnail **/
    height?: number;
    /** The mode to use to resize the image **/
    mode?: ResizeFitMode;
    /** If true, the content disposition header will be returned, triggering a file download from the browser.
     * If false, the header won't be returned and the image will be displayed as is **/
    applyContentDispositionHeader?: boolean;
  }): Promise<any>;

  /**
   * **used to get the request options without making a http request**
   * Download a file thumbnail
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileDownloadThumbnailApiRequestOptions({
    id,
    width,
    height,
    mode,
    applyContentDispositionHeader,
  }: {
    /** The AId of the file to download a thumbnail of **/
    id: string;
    /** The height of the thumbnail **/
    width?: number;
    /** The height of the thumbnail **/
    height?: number;
    /** The mode to use to resize the image **/
    mode?: ResizeFitMode;
    /** If true, the content disposition header will be returned, triggering a file download from the browser.
     * If false, the header won't be returned and the image will be displayed as is **/
    applyContentDispositionHeader?: boolean;
  }): ApiRequestOptions;

  /**
   * Upload a file
   * @returns FileCreateWebResponseModel
   */
  fileUpload({
    folderItemId,
  }: {
    /** The AId of the item representing the folder to upload to
     * If not specified, the file will be uploaded to the folder of the user that is uploading **/
    folderItemId?: string | null;
  }): Promise<FileCreateWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Upload a file
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileUploadApiRequestOptions({
    folderItemId,
  }: {
    /** The AId of the item representing the folder to upload to
     * If not specified, the file will be uploaded to the folder of the user that is uploading **/
    folderItemId?: string | null;
  }): ApiRequestOptions;

  /**
   * Moves a file to a folder with a given id
   * @returns FileMoveWebResponseModel
   */
  fileMove({
    id,
    requestBody,
  }: {
    /** The AId of the file to move **/
    id: string;
    /** The move file model **/
    requestBody: FileMoveWebRequestModel;
  }): Promise<FileMoveWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Moves a file to a folder with a given id
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileMoveApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId of the file to move **/
    id: string;
    /** The move file model **/
    requestBody: FileMoveWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Starts a task that prepares a zip archive containing files matching the provided aqs query
   * @returns FileBulkDownloadWebResponseModel
   */
  fileBulkFileDownload({
    requestBody,
  }: {
    /** The bulk file download model **/
    requestBody: FileBulkDownloadWebRequestModel;
  }): Promise<FileBulkDownloadWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Starts a task that prepares a zip archive containing files matching the provided aqs query
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileBulkFileDownloadApiRequestOptions({
    requestBody,
  }: {
    /** The bulk file download model **/
    requestBody: FileBulkDownloadWebRequestModel;
  }): ApiRequestOptions;

  /**
   * Get the file AId for the bulk file download once completed
   * Finds the file id for the given task or returns not found
   * @returns BulkFileDownloadGetFileWebResponseModel
   */
  fileGetFileId({
    id,
  }: {
    /** The id of the bulk file download task **/
    id: string;
  }): Promise<BulkFileDownloadGetFileWebResponseModel>;

  /**
   * **used to get the request options without making a http request**
   * Get the file AId for the bulk file download once completed
   * Finds the file id for the given task or returns not found
   * @returns ApiRequestOptions the request options to fulfill a http request
   */
  fileGetFileIdApiRequestOptions({
    id,
  }: {
    /** The id of the bulk file download task **/
    id: string;
  }): ApiRequestOptions;
}
