/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

/**
 * Web request model for a dodi attribute edit operation
 */
export type DodiAttributeEditWebRequestModel = {
  /**
   * The dodi attribute name
   */
  name: string;
  /**
   * If true, the dodi attribute is required an must be specified during creation
   */
  required: boolean;
  /**
   * If true, the attribute can never be edited
   */
  readonly: boolean;
  /**
   * If true, the other items within the same design cannot have the same value for this attribute
   */
  unique: boolean;
  /**
   * Optional tags to add to an attribute if it has to follow some special behaviour.
   * For example, whether it represents a time duration
   */
  tags: Array<string>;
  /**
   * The attribute options containing options and additional info depending on the attribute type
   */
  options: DodiAttributeOptionsWebModelBase;
  /**
   * The signature is used to ensure that the dodi being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same dodi
   */
  signature: string;
};

export namespace DodiAttributeEditWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeEditWebRequestModel';
}
