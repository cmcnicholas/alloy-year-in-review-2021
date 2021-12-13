/* eslint-disable */

/**
 * Web model for dodi versioning
 */
export type DodiVersionedWebModel = {
  /**
   * If true, the items of this design will have versioning enabled. This is needed for the timelord to work.
   * A versioned item has one to many items and each of them represents the item in a specific temporal interval
   * which is denoted by its start and end date. Only enable this feature if you are interest in the state of an item
   * at a certain point in time, e.g. how the street light was 2 years ago.
   * Delete items for this kind of designs will actually be end dated instead of being deleted, so that it will be possible to
   * find them when going back in time
   */
  value: boolean;
  /**
   * The parent dodi Guc, i.e. the dodi that defines this versioned
   */
  parent: string;
};

export namespace DodiVersionedWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiVersionedWebModel';
}
