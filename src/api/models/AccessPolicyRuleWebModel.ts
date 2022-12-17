/* eslint-disable */

/**
 * Web model for a accessPolicy rule which is either an Aqs Rule or an Aqs MathAggregation
 */
export type AccessPolicyRuleWebModel = {
  /**
   * The accessPolicy rule Alloy Id
   */
  id: string;
  /**
   * The accessPolicy rule DODI code
   */
  dodiCode: string;
  /**
   * The rule name to display
   */
  pathToUser: string;
};

export namespace AccessPolicyRuleWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AccessPolicyRuleWebModel';
}
