/* eslint-disable */

import type { CustomReportControlTabularWebModelBase } from './CustomReportControlTabularWebModelBase';
import type { CustomReportDocumentDefinitionInfoWebModelBase } from './CustomReportDocumentDefinitionInfoWebModelBase';
import type { CustomReportDocumentTabularVisualizationType } from './CustomReportDocumentTabularVisualizationType';

export type CustomReportDocumentDefinitionInfoTabularWebModel =
  CustomReportDocumentDefinitionInfoWebModelBase & {
    /**
     * The list of controls that make up this custom report. The order in the array is the order in which they
     * appear in the report
     */
    controls: Array<CustomReportControlTabularWebModelBase>;
    /**
     * The array of visualizations to use for this document definition. For every visualization,
     * a new report document will be created when the custom report is run
     */
    visualizations: Array<CustomReportDocumentTabularVisualizationType>;
  };

export namespace CustomReportDocumentDefinitionInfoTabularWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDocumentDefinitionInfoTabularWebModel';
}
