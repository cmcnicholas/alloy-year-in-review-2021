/* eslint-disable */

import type { DodiStencilControlWebModel } from './DodiStencilControlWebModel';

/**
 * Web model for stencil
 */
export type DodiStencilWebModel = {
  /**
   * The controls that make up this stencil
   */
  controls: Array<DodiStencilControlWebModel>;
  /**
   * The Guc identifying the parent this stencil comes from
   */
  parent: string;
};

export namespace DodiStencilWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiStencilWebModel';
}
