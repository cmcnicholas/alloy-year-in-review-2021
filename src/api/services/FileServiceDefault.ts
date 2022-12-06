/* eslint-disable */

import type { BulkFileDownloadGetFileWebResponseModel } from '../models/BulkFileDownloadGetFileWebResponseModel';
import type { FileBulkDownloadWebRequestModel } from '../models/FileBulkDownloadWebRequestModel';
import type { FileBulkDownloadWebResponseModel } from '../models/FileBulkDownloadWebResponseModel';
import type { FileCreateWebResponseModel } from '../models/FileCreateWebResponseModel';
import type { FileMoveWebRequestModel } from '../models/FileMoveWebRequestModel';
import type { FileMoveWebResponseModel } from '../models/FileMoveWebResponseModel';
import type { ResizeFitMode } from '../models/ResizeFitMode';
import type { FileService } from './FileService';
import type { ApiRequestOptions } from '../core/ApiRequestOptions';
import { request as __request } from '../core/request';
import type { ApiOptions } from '../core/ApiOptions';

export class FileServiceDefault implements FileService {
  private readonly config: ApiOptions;

  /**
   * creates a new service
   * @param config the configuration to use
   */
  public constructor(config: ApiOptions) {
    this.config = config;
  }

  public async fileDownload({
    id,
    applyContentDispositionHeader = true,
  }: {
    /** The AId of the file to download **/
    id: string;
    /** If true, the content disposition header will be returned and the
     * download will be seen as a file download by the browser. If false, the header won't be returned and the image will be displayed as is
     * If false, the header won't be returned and the image will be displayed as is **/
    applyContentDispositionHeader?: boolean;
  }): Promise<any> {
    const options = this.fileDownloadApiRequestOptions({
      id,
      applyContentDispositionHeader,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileDownloadApiRequestOptions({
    id,
    applyContentDispositionHeader = true,
  }: {
    /** The AId of the file to download **/
    id: string;
    /** If true, the content disposition header will be returned and the
     * download will be seen as a file download by the browser. If false, the header won't be returned and the image will be displayed as is
     * If false, the header won't be returned and the image will be displayed as is **/
    applyContentDispositionHeader?: boolean;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/file/${id}`,
      query: {
        applyContentDispositionHeader: applyContentDispositionHeader,
      },
    };
  }

  public async fileDelete({
    id,
  }: {
    /** The AId of the file to delete **/
    id: string;
  }): Promise<void> {
    const options = this.fileDeleteApiRequestOptions({
      id,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileDeleteApiRequestOptions({
    id,
  }: {
    /** The AId of the file to delete **/
    id: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/file/${id}`,
    };
  }

  public async fileDownloadThumbnail({
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
  }): Promise<any> {
    const options = this.fileDownloadThumbnailApiRequestOptions({
      id,
      width,
      height,
      mode,
      applyContentDispositionHeader,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileDownloadThumbnailApiRequestOptions({
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
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/file/${id}/thumbnail`,
      query: {
        Width: width,
        Height: height,
        Mode: mode,
        ApplyContentDispositionHeader: applyContentDispositionHeader,
      },
    };
  }

  public async fileUpload({
    folderItemId,
  }: {
    /** The AId of the item representing the folder to upload to
     * If not specified, the file will be uploaded to the folder of the user that is uploading **/
    folderItemId?: string | null;
  }): Promise<FileCreateWebResponseModel> {
    const options = this.fileUploadApiRequestOptions({
      folderItemId,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileUploadApiRequestOptions({
    folderItemId,
  }: {
    /** The AId of the item representing the folder to upload to
     * If not specified, the file will be uploaded to the folder of the user that is uploading **/
    folderItemId?: string | null;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/file`,
      query: {
        FolderItemId: folderItemId,
      },
    };
  }

  public async fileMove({
    id,
    requestBody,
  }: {
    /** The AId of the file to move **/
    id: string;
    /** The move file model **/
    requestBody: FileMoveWebRequestModel;
  }): Promise<FileMoveWebResponseModel> {
    const options = this.fileMoveApiRequestOptions({
      id,
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileMoveApiRequestOptions({
    id,
    requestBody,
  }: {
    /** The AId of the file to move **/
    id: string;
    /** The move file model **/
    requestBody: FileMoveWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/file/${id}/move`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async fileBulkFileDownload({
    requestBody,
  }: {
    /** The bulk file download model **/
    requestBody: FileBulkDownloadWebRequestModel;
  }): Promise<FileBulkDownloadWebResponseModel> {
    const options = this.fileBulkFileDownloadApiRequestOptions({
      requestBody,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileBulkFileDownloadApiRequestOptions({
    requestBody,
  }: {
    /** The bulk file download model **/
    requestBody: FileBulkDownloadWebRequestModel;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/file/bulk-download`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async fileGetFileId({
    id,
  }: {
    /** The id of the bulk file download task **/
    id: string;
  }): Promise<BulkFileDownloadGetFileWebResponseModel> {
    const options = this.fileGetFileIdApiRequestOptions({
      id,
    });
    const result = await __request(options);
    return result.body;
  }

  public fileGetFileIdApiRequestOptions({
    id,
  }: {
    /** The id of the bulk file download task **/
    id: string;
  }): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/file/bulk-download/${id}/file`,
    };
  }
}
