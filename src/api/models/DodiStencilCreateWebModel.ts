/* eslint-disable */

import type { DodiStencilControlWebModel } from './DodiStencilControlWebModel';

/**
 * Web model for stencil
 */
export type DodiStencilCreateWebModel = {
  /**
   * The controls that make up this stencil
   */
  controls: Array<DodiStencilControlWebModel>;
};

export namespace DodiStencilCreateWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiStencilCreateWebModel';
}
