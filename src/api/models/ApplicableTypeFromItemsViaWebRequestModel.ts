/* eslint-disable */

import type { ApplicableFromDodiWebModel } from './ApplicableFromDodiWebModel';
import type { ApplicableTypeFromQueryTypeWebModel } from './ApplicableTypeFromQueryTypeWebModel';

/**
 * Request model for a list applicable from via operation
 */
export type ApplicableTypeFromItemsViaWebRequestModel = {
  /**
   * The returned applicable types will all be applicable to these items.
   * Assumption is that all the items belong to the same dodi either containing
   * an attribute specified by  attributes_applicableFilterVia or may be linked
   * to from any attributes_applicableFilterVia in the designs_applicableFilter configuration
   */
  toAllItemsVia: Array<string>;
  /**
   * The filter attribute code to match applicable filter rules on.
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

export namespace ApplicableTypeFromItemsViaWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'ApplicableTypeFromItemsViaWebRequestModel';
}
