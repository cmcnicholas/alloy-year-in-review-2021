/* eslint-disable */

import type { AccessPolicyRuleWebModel } from './AccessPolicyRuleWebModel';
import type { MetadataWebModel } from './MetadataWebModel';

/**
 * Web model for a accessPolicy
 */
export type AccessPolicyWebModel = {
  /**
   * The unique Access Policy Guc
   */
  code: string;
  /**
   * The Access Policy name
   */
  name: string;
  /**
   * Whether the Access Policy is enabled or not
   */
  enabled: boolean;
  /**
   * The Access Policy rules
   */
  rules: Array<AccessPolicyRuleWebModel>;
  /**
   * The metadata of an Access Policy
   */
  metadata: MetadataWebModel;
};

export namespace AccessPolicyWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AccessPolicyWebModel';
}
