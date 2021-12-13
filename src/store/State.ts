import { AlloyError } from '@/models/AlloyError';

export interface State {
  token: string | null;
  failed: AlloyError | null;
  loaded: boolean;
  jobsCreated: number;
  jobsCompleted: number;
  inspectionsCreated: number;
  inspectionsCompleted: number;
  projectsCreated: number;
  defectsRaised: number;
  layersCreated: number;
  layersManaged: number;
  assetsCreated: number;
  assetsManaged: number;
  importsProcessed: number;
  workflowsActive: number;
  workflowsRan: number;
}
