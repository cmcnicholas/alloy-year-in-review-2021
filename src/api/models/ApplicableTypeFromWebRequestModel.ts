/* eslint-disable */

import type { ApplicableFromDodiWebModel } from './ApplicableFromDodiWebModel';
import type { ApplicableTypeFromQueryTypeWebModel } from './ApplicableTypeFromQueryTypeWebModel';

/**
 * Request model for a list applicable from operation
 */
export type ApplicableTypeFromWebRequestModel = {
  /**
   * The returned applicable types will all be applicable to these items.
   * Assumption is that all the items belong to the same dodi containing the passed FilterLinkAttributeCode.
   */
  toAllItems: Array<string>;
  /**
   * The filter attribute code to match applicable filter rules on.  This is the link attribute
   * connecting from the response of this API call to the requested `ToAllItems`.
   */
  filterAttributeCode: string;
  /**
   * Optional restriction on the types to consider applicable from.
   */
  from?: ApplicableFromDodiWebModel | null;
  /**
   * Additional optional string condition on all attributes for the returned applicable from results
   */
  query?: string | null;
  /**
   * Condition type to be used with Query property on returned items if specified
   * Defaults to global attribute search
   * Does not apply to returned dodis
   */
  queryTypeForItems?: ApplicableTypeFromQueryTypeWebModel;
};

export namespace ApplicableTypeFromWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableTypeFromWebRequestModel';
}
