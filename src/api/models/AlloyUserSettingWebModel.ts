/* eslint-disable */

import type { JToken } from './JToken';

/**
 * /Web model for an alloy user setting
 */
export type AlloyUserSettingWebModel = {
  /**
   * The setting name
   */
  name: string;
  /**
   * The setting value
   */
  value: JToken;
};

export namespace AlloyUserSettingWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AlloyUserSettingWebModel';
}
