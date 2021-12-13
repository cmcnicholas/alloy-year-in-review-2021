import { createStore } from 'vuex';
import { load } from './actions/load';
import { login } from './actions/login';
import { setFailed } from './mutations/setFailed';
import { State } from './State';

export default createStore<State>({
  state: {
    token: null,
    failed: null,
    loaded: false,
    assetsCreated: 0,
    assetsManaged: 0,
    defectsRaised: 0,
    importsProcessed: 0,
    inspectionsCompleted: 0,
    inspectionsCreated: 0,
    jobsCompleted: 0,
    jobsCreated: 0,
    layersCreated: 0,
    layersManaged: 0,
    projectsCreated: 0,
    workflowsActive: 0,
    workflowsRan: 0,
  },
  mutations: {
    setFailed,
  },
  actions: {
    login,
    load,
  },
  modules: {},
});
