/* eslint-disable */

import type { DodiStencilControlWebModel } from './DodiStencilControlWebModel';

/**
 * Web model for stencil
 */
export type DodiStencilEditWebModel = {
  /**
   * The controls that make up this stencil
   */
  controls: Array<DodiStencilControlWebModel>;
};

export namespace DodiStencilEditWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiStencilEditWebModel';
}
