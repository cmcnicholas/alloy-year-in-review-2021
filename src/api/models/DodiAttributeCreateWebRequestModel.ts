/* eslint-disable */

import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';

/**
 * Web request model for a dodi attribute create operation
 */
export type DodiAttributeCreateWebRequestModel = {
  /**
   * The name of the dodi attribute
   */
  name: string;
  /**
   * If true, this is a required attribute
   */
  required: boolean;
  /**
   * If true this, is a readonly attribute and can only be set on creation
   */
  readonly: boolean;
  /**
   * If true, this attribute must be unique within a design
   */
  unique: boolean;
  /**
   * Optional tags to add to an attribute if it has to follow some special behaviour.
   * For example, whether it represents a time duration
   */
  tags?: Array<string> | null;
  /**
   * The attribute options containing options and additional info depending on the attribute type
   */
  options: DodiAttributeOptionsWebModelBase;
  /**
   * The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same dodi
   */
  signature: string;
};

export namespace DodiAttributeCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeCreateWebRequestModel';
}
