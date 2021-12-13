/* eslint-disable */

/**
 * Web request model for an Access Policy rule create operation
 */
export type AccessPolicyRuleCreateWebRequestModel = {
  /**
   * The Guc of the Dodi this rule applies to
   */
  dodiCode: string;
  /**
   * The AQS path that connects the Dodi with the specified DodiCode to the Users design
   */
  pathToUser: string;
  /**
   * The signature is used to ensure that the accessPolicy being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same accessPolicy
   */
  signature: string;
};

export namespace AccessPolicyRuleCreateWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AccessPolicyRuleCreateWebRequestModel';
}
