/* eslint-disable */

import type { CustomReportControlTabularWebModelBase } from './CustomReportControlTabularWebModelBase';
import type { CustomReportDocumentDefinitionWebModelBase } from './CustomReportDocumentDefinitionWebModelBase';
import type { CustomReportDocumentTabularVisualizationTypeWebModel } from './CustomReportDocumentTabularVisualizationTypeWebModel';

export type CustomReportDocumentDefinitionTabularWebModel =
  CustomReportDocumentDefinitionWebModelBase & {
    /**
     * The list of controls that make up this custom report. The order in the array is the order in which they
     * appear in the report
     */
    controls: Array<CustomReportControlTabularWebModelBase>;
    /**
     * The array of visualizations to use for this document definition. For every visualization,
     * a new report document will be created when the custom report is run
     */
    visualizations: Array<CustomReportDocumentTabularVisualizationTypeWebModel>;
  };

export namespace CustomReportDocumentDefinitionTabularWebModel {
  /**
   * the discriminator for the model if required for more complex api's
   */
  export const discriminator = 'CustomReportDocumentDefinitionTabularWebModel';
}
