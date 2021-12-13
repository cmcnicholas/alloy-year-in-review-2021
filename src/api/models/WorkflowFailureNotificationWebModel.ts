/* eslint-disable */

/**
 * Model representing details for failure notifications
 */
export type WorkflowFailureNotificationWebModel = {
  /**
   * Username of the user who should be notified on failure
   */
  username?: string | null;
  /**
   * Number of failures since last notification
   */
  failureCount: number;
  /**
   * The time when the last failure notification was sent
   */
  lastNotificationTime?: string | null;
};

export namespace WorkflowFailureNotificationWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'WorkflowFailureNotificationWebModel';
}
