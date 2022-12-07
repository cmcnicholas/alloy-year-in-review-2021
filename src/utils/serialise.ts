import { State } from '@/store/State';

export function serialise(state: State): string {
  const model: Omit<State, 'token' | 'customers' | 'failed' | 'loaded'> = {
    assetsCreated: state.assetsCreated,
    assetsManaged: state.assetsManaged,
    customerCode: state.customerCode,
    customerName: state.customerName,
    defectsRaised: state.defectsRaised,
    importsProcessed: state.importsProcessed,
    inspectionsCompleted: state.inspectionsCompleted,
    inspectionsCreated: state.inspectionsCreated,
    jobsCompleted: state.jobsCompleted,
    jobsCreated: state.jobsCreated,
    layersManaged: state.layersManaged,
    projectsCreated: state.projectsCreated,
    workflowsActive: state.workflowsActive,
    workflowSeconds: state.workflowSeconds,
    designsCustom: state.designsCustom,
  };

  return btoa(unescape(encodeURIComponent(JSON.stringify(model))));
}
