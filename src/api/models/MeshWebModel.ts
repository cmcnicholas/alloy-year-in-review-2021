/* eslint-disable */

import type { Context } from './Context';
import type { JObject } from './JObject';
import type { MeshType } from './MeshType';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a mesh
 */
export type MeshWebModel = {
  /**
   * The mesh name
   */
  name: string;
  /**
   * The mesh Context
   */
  context: Context;
  /**
   * The mesh type
   */
  type: MeshType;
  /**
   * The unique mesh Guc
   */
  code: string;
  /**
   * True if the mesh is enabled, false otherwise
   */
  enabled: boolean;
  /**
   * The settings specific to each single mesh
   */
  settings: JObject;
  /**
   * The metadata to a mesh
   */
  metadata: MetadataWebModel;
};

export namespace MeshWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshWebModel';
}
