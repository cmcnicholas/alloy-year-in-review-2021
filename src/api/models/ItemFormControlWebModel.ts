/* eslint-disable */

import type { JObject } from './JObject';

/**
 * Web model for item form controls
 */
export type ItemFormControlWebModel = {
  /**
   * The control code
   */
  code: string;
  /**
   * The properties to configure the control
   */
  properties: JObject;
  /**
   * The optional attribute code which ties the control to an attribute on the dodi
   */
  attributeCode?: string | null;
};

export namespace ItemFormControlWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormControlWebModel';
}
