import { ActionContext } from 'vuex';
import { State } from '../State';

export async function load(context: ActionContext<State, State>): Promise<void> {
  context.state.assetsCreated = 4370;
  context.state.assetsManaged = 7291;

  await randomWait();

  context.state.defectsRaised = 1480;

  await randomWait();

  context.state.importsProcessed = 12;

  await randomWait();

  context.state.inspectionsCompleted = 27899;
  context.state.inspectionsCreated = 12889;

  await randomWait();

  context.state.jobsCompleted = 29881;
  context.state.jobsCreated = 2309;

  await randomWait();

  context.state.layersManaged = 43588;
  context.state.layersCreated = 43588;

  await randomWait();

  context.state.projectsCreated = 1234;

  await randomWait();

  context.state.workflowsActive = 76;
  context.state.workflowsRan = 123498987;

  context.state.loaded = true;
}

async function randomWait(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));
}
