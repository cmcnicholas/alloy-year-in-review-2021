/* eslint-disable */

import type { Context } from './Context';
import type { DodiAttributeOptionsWebModelBase } from './DodiAttributeOptionsWebModelBase';
import type { DodiAttributeType } from './DodiAttributeType';

/**
 * Web model for a dodi attribute
 */
export type DodiAttributeWebModel = {
  /**
   * The dodi attribute name
   */
  name: string;
  /**
   * The dodi attribute Guc
   */
  code: string;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this attribute
   */
  parent: string;
  /**
   * The Context of the attribute. It specifies whether this attribute is part
   * of the core system, it belongs to a module, or it is on a customer level only
   */
  context: Context;
  /**
   * The attribute type, e.g. number, boolean, geometry etc.
   */
  type: DodiAttributeType;
  /**
   * If true, the attribute is required and cannot be left empty
   */
  required: boolean;
  /**
   * If true, the attribute is readonly and cannot be edited
   */
  readonly: boolean;
  /**
   * If true, the attribute value must be unique within a design
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
};

export namespace DodiAttributeWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeWebModel';
}
