/* eslint-disable */

/**
 * Web request model to add the specified design interface to the ones implemented by the design
 */
export type DesignAddDesignInterfaceWebRequestModel = {
  /**
   * The Guc of the interface to be added
   */
  interfaceCode: string;
  /**
   * The signature is used to ensure that the design being edited is actually the one provided to the system.
   * This is enforced in order to avoid applying possibly invalid edits after another user has edited the same design
   */
  signature: string;
};

export namespace DesignAddDesignInterfaceWebRequestModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'DesignAddDesignInterfaceWebRequestModel';
}
