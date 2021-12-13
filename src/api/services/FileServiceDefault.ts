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

  public async fileDownload(
    id: string,
    applyContentDispositionHeader: boolean = true,
  ): Promise<any> {
    const options = this.fileDownloadApiRequestOptions(id, applyContentDispositionHeader);
    const result = await __request(options);
    return result.body;
  }

  public fileDownloadApiRequestOptions(
    id: string,
    applyContentDispositionHeader: boolean = true,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/file/${id}`,
      query: {
        applyContentDispositionHeader: applyContentDispositionHeader,
      },
    };
  }

  public async fileDelete(id: string): Promise<void> {
    const options = this.fileDeleteApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public fileDeleteApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'DELETE',
      path: `/api/file/${id}`,
    };
  }

  public async fileDownloadThumbnail(
    id: string,
    width?: number,
    height?: number,
    mode?: ResizeFitMode,
    applyContentDispositionHeader?: boolean,
  ): Promise<any> {
    const options = this.fileDownloadThumbnailApiRequestOptions(
      id,
      width,
      height,
      mode,
      applyContentDispositionHeader,
    );
    const result = await __request(options);
    return result.body;
  }

  public fileDownloadThumbnailApiRequestOptions(
    id: string,
    width?: number,
    height?: number,
    mode?: ResizeFitMode,
    applyContentDispositionHeader?: boolean,
  ): ApiRequestOptions {
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

  public async fileUpload(folderItemId?: string | null): Promise<FileCreateWebResponseModel> {
    const options = this.fileUploadApiRequestOptions(folderItemId);
    const result = await __request(options);
    return result.body;
  }

  public fileUploadApiRequestOptions(folderItemId?: string | null): ApiRequestOptions {
    return {
      ...this.config,
      method: 'POST',
      path: `/api/file`,
      query: {
        FolderItemId: folderItemId,
      },
    };
  }

  public async fileMove(
    id: string,
    requestBody: FileMoveWebRequestModel,
  ): Promise<FileMoveWebResponseModel> {
    const options = this.fileMoveApiRequestOptions(id, requestBody);
    const result = await __request(options);
    return result.body;
  }

  public fileMoveApiRequestOptions(
    id: string,
    requestBody: FileMoveWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/file/${id}/move`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async fileBulkFileDownload(
    requestBody: FileBulkDownloadWebRequestModel,
  ): Promise<FileBulkDownloadWebResponseModel> {
    const options = this.fileBulkFileDownloadApiRequestOptions(requestBody);
    const result = await __request(options);
    return result.body;
  }

  public fileBulkFileDownloadApiRequestOptions(
    requestBody: FileBulkDownloadWebRequestModel,
  ): ApiRequestOptions {
    return {
      ...this.config,
      method: 'PUT',
      path: `/api/file/bulk-download`,
      body: requestBody,
      mediaType: 'application/json',
    };
  }

  public async fileGetFileId(id: string): Promise<BulkFileDownloadGetFileWebResponseModel> {
    const options = this.fileGetFileIdApiRequestOptions(id);
    const result = await __request(options);
    return result.body;
  }

  public fileGetFileIdApiRequestOptions(id: string): ApiRequestOptions {
    return {
      ...this.config,
      method: 'GET',
      path: `/api/file/bulk-download/${id}/file`,
    };
  }
}
