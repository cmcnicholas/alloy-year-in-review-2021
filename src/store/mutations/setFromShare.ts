import { deserialise } from '@/utils/deserialise';
import { State } from '../State';

export function setFromShare(state: State, share: string): void {
  const model = deserialise(share);

  state.assetsCreated = model.assetsCreated;
  state.assetsManaged = model.assetsManaged;
  state.customerCode = model.customerCode;
  state.customerName = model.customerName;
  state.defectsRaised = model.defectsRaised;
  state.importsProcessed = model.importsProcessed;
  state.inspectionsCompleted = model.inspectionsCompleted;
  state.inspectionsCreated = model.inspectionsCreated;
  state.jobsCompleted = model.jobsCompleted;
  state.jobsCreated = model.jobsCreated;
  state.layersManaged = model.layersManaged;
  state.projectsCreated = model.projectsCreated;
  state.workflowsActive = model.workflowsActive;
  state.workflowSeconds = model.workflowSeconds;
  state.designsCustom = model.designsCustom;
  state.reportsRan = model.reportsRan;

  state.token = 'xxx';
  state.loaded = true;
  state.failed = null;
  state.customers = [];
}
