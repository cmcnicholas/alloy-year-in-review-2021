import { AlloyError } from '@/models/AlloyError';
import { State } from '@/store/State';

export function deserialise(
  payload: string,
): Omit<State, 'token' | 'customers' | 'failed' | 'loaded'> {
  const decoded = decodeURIComponent(escape(window.atob(payload)));
  const json = parseJson(decoded);

  const model: Omit<State, 'token' | 'customers' | 'failed' | 'loaded'> = {
    assetsCreated: safeGetNumber(json, 'assetsCreated'),
    assetsManaged: safeGetNumber(json, 'assetsManaged'),
    customerCode: safeGetString(json, 'customerCode') || 'unknown',
    customerName: safeGetString(json, 'customerName') || 'unknown',
    defectsRaised: safeGetNumber(json, 'defectsRaised'),
    importsProcessed: safeGetNumber(json, 'importsProcessed'),
    inspectionsCompleted: safeGetNumber(json, 'inspectionsCompleted'),
    inspectionsCreated: safeGetNumber(json, 'inspectionsCreated'),
    jobsCompleted: safeGetNumber(json, 'jobsCompleted'),
    jobsCreated: safeGetNumber(json, 'jobsCreated'),
    layersManaged: safeGetNumber(json, 'layersManaged'),
    projectsCreated: safeGetNumber(json, 'projectsCreated'),
    workflowsActive: safeGetNumber(json, 'workflowsActive'),
    workflowSeconds: safeGetNumber(json, 'workflowSeconds'),
    designsCustom: safeGetNumber(json, 'designsCustom'),
  };

  return model;
}

function safeGetNumber(json: unknown, key: string): number {
  if (hasProperty(json, key) && typeof json[key] === 'number') {
    return json[key] as number;
  }
  return 0;
}

function safeGetString(json: unknown, key: string): string {
  if (hasProperty(json, key) && typeof json[key] === 'string') {
    return json[key] as string;
  }
  return '';
}

function hasProperty<T, P extends PropertyKey>(obj: T, prop: P): obj is T & Record<P, unknown> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Object.prototype.hasOwnProperty.call(obj, prop) || (obj as any)[prop] !== undefined)
  );
}

function parseJson(value: string): unknown {
  try {
    return JSON.parse(value);
  } catch (e) {
    throw new AlloyError(1639388714, 'failed to deserialise payload');
  }
}
