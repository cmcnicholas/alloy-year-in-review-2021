/* eslint-disable */

/**
 * Model representing details for failure notifications
 */
export type WorkflowFailureNotificationInfoWebModel = {
  /**
   * Username of the user who should be notified on failure
   */
  username?: string | null;
};

export namespace WorkflowFailureNotificationInfoWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowFailureNotificationInfoWebModel';
}
