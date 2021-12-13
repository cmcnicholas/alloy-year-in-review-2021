/* eslint-disable */

import type { JObject } from './JObject';

/**
 * Web request model for an item form control upsert operation
 */
export type ItemFormControlUpsertWebRequestModel = {
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

export namespace ItemFormControlUpsertWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ItemFormControlUpsertWebRequestModel';
}
