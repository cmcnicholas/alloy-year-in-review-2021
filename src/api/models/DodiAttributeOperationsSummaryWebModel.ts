/* eslint-disable */

/**
 * Web model for a dodi attribute operations summary
 */
export type DodiAttributeOperationsSummaryWebModel = {
  /**
   * The code of the attribute to which this operations summary belongs to
   */
  attributeCode: string;
  /**
   * If true, the user has permissions to edit the correspondent dodi attribute, that is the
   * attribute on the dodi which holds the attribute config, and not the item attribute, which is the
   * attribute on an item and the one holding the actual value
   */
  canWriteDodiAttribute: boolean;
  /**
   * If true, the user has permissions to delete the correspondent dodi attribute, that is the
   * attribute on the dodi which holds the attribute config, and not the item attribute, which is the
   * attribute on an item and the one holding the actual value
   */
  canDeleteDodiAttribute: boolean;
  /**
   * If true, the user has permissions to edit or delete the correspondent item attribute, that is the
   * attribute on the item which holds the actual value, and not the dodi attribute, which is the
   * attribute on the dodi which holds the attribute config
   */
  canWriteItemAttribute: boolean;
};

export namespace DodiAttributeOperationsSummaryWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DodiAttributeOperationsSummaryWebModel';
}
