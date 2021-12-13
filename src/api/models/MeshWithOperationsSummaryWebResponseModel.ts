/* eslint-disable */

import type { MeshOperationsSummaryWebModel } from './MeshOperationsSummaryWebModel';
import type { MeshWebModel } from './MeshWebModel';

/**
 * Web model for a mesh
 */
export type MeshWithOperationsSummaryWebResponseModel = {
  /**
   * The retrieved mesh
   */
  mesh: MeshWebModel;
  /**
   * The summary of the UAC operations allowed for this layer
   */
  operationsSummary: MeshOperationsSummaryWebModel;
};

export namespace MeshWithOperationsSummaryWebResponseModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshWithOperationsSummaryWebResponseModel';
}
