/* eslint-disable */

import type { JObject } from './JObject';

/**
 * The web request model used to edit a mesh
 */
export type MeshEditWebRequestModel = {
  /**
   * The mesh name
   */
  name: string;
  /**
   * Whether the mesh is enabled or not
   */
  enabled: boolean;
  /**
   * The settings for the mesh
   */
  settings: JObject;
  /**
   * The signature is used to ensure that the card being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same card
   */
  signature: string;
};

export namespace MeshEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'MeshEditWebRequestModel';
}
