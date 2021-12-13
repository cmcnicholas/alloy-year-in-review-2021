/* eslint-disable */

/**
 * Web model for a customer setting
 */
export type CustomerSettingWebModel = {
  /**
   * Setting name
   */
  name: string;
  /**
   * Setting value
   */
  value: string;
};

export namespace CustomerSettingWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomerSettingWebModel';
}
