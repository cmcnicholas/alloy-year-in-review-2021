/* eslint-disable */

import type { DodiAttributeWebModel } from './DodiAttributeWebModel';
import type { DodiWebModel } from './DodiWebModel';

/**
 * Aqs Path Info Element web model
 */
export type AqsPathInfoElementWebModel = {
  /**
   * The crawled dodi
   */
  dodi: DodiWebModel;
  /**
   * The attribute used to go from this dodi to the next one in the path. Null if this is the last path element
   */
  linkingAttribute?: DodiAttributeWebModel | null;
};

export namespace AqsPathInfoElementWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'AqsPathInfoElementWebModel';
}
