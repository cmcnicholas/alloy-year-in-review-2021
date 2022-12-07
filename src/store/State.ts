import { AlloyError } from '@/models/AlloyError';

export interface State {
  token: string | null;
  customers: Array<{
    code: string;
    name: string;
  }>;
  customerCode: string;
  customerName: string;
  failed: AlloyError | null;
  loaded: boolean;
  jobsCreated: number;
  jobsCompleted: number;
  inspectionsCreated: number;
  inspectionsCompleted: number;
  projectsCreated: number;
  defectsRaised: number;
  layersManaged: number;
  assetsCreated: number;
  assetsManaged: number;
  importsProcessed: number;
  workflowsActive: number;
  workflowSeconds: number;
  designsCustom: number;
}
