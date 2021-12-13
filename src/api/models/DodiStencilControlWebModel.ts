/* eslint-disable */

import type { JObject } from './JObject';

/**
 * Dodi stencil control web model
 */
export type DodiStencilControlWebModel = {
  /**
   * The control code
   */
  code: string;
  /**
   * The properties to configure the control, see: https://github.com/yottaltd/alloy-web for specification
   */
  properties: JObject;
  /**
   * Whether the control should be ignored when rendering
   */
  hidden: boolean;
  /**
   * The optional attribute code which ties the control to an attribute on the dodi
   */
  attributeCode?: string | null;
};

export namespace DodiStencilControlWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiStencilControlWebModel';
}
