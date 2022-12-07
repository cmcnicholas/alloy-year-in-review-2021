import { AqsItemType } from '@/api/models/AqsItemType';
import { AqsJsonNode } from '@/api/models/AqsJsonNode';
import { Context } from '@/api/models/Context';
import { QuotaListUsageWebResponseModel } from '@/api/models/QuotaListUsageWebResponseModel';
import { QuotaUsageComponent } from '@/api/models/QuotaUsageComponent';
import { AqsService } from '@/api/services/AqsService';
import { AqsServiceDefault } from '@/api/services/AqsServiceDefault';
import { DodiServiceDefault } from '@/api/services/DodiServiceDefault';
import { ImportServiceDefault } from '@/api/services/ImportServiceDefault';
import { LayerServiceDefault } from '@/api/services/LayerServiceDefault';
import { QuotaUsageService } from '@/api/services/QuotaUsageService';
import { QuotaUsageServiceDefault } from '@/api/services/QuotaUsageServiceDefault';
import { WorkflowServiceDefault } from '@/api/services/WorkflowServiceDefault';
import { getApiName } from '@/utils/getApiName';
import { getApiUrl } from '@/utils/getApiUrl';
import { ActionContext } from 'vuex';
import { State } from '../State';

const StartOfYearObjectId = '61cf99800000000000000000';
const EndOfYearObjectId = '63b0cd000000000000000000';
const StartOfYearIsoDate = '2022-01-01T00:00:00.000Z';
const EndOfYearIsoDate = '2023-01-01T00:00:00.000Z';

export async function load(context: ActionContext<State, State>): Promise<void> {
  await loadAssets(context);
  await randomWait();

  await loadDefects(context);
  await randomWait();

  await loadImports(context);
  await randomWait();

  await loadInspections(context);
  await randomWait();

  await loadJobs(context);
  await randomWait();

  await loadLayers(context);
  await randomWait();

  await loadProjects(context);
  await randomWait();

  await loadWorkflows(context);
  await loadWorkflowSeconds(context);

  await loadDesignsCustom(context);

  // we're done!
  context.state.loaded = true;
}

async function randomWait(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 3000));
}

function getAqsService(context: ActionContext<State, State>): AqsService {
  return new AqsServiceDefault({
    baseUrl: getApiUrl(getApiName()),
    defaultHeaders: {
      token: context.state.token ?? 'unknown',
    },
  });
}

function aqsDateRange(): AqsJsonNode {
  return {
    type: AqsItemType.And,
    children: [
      {
        type: AqsItemType.GreaterThan,
        children: [
          {
            type: AqsItemType.ItemProperty,
            properties: {
              itemPropertyName: 'itemId',
            },
          },
          {
            type: AqsItemType.AlloyId,
            properties: {
              value: [StartOfYearObjectId],
            },
          },
        ],
      },
      {
        type: AqsItemType.LessThan,
        children: [
          {
            type: AqsItemType.ItemProperty,
            properties: {
              itemPropertyName: 'itemId',
            },
          },
          {
            type: AqsItemType.AlloyId,
            properties: {
              value: [EndOfYearObjectId],
            },
          },
        ],
      },
    ],
  };
}

async function loadAssets(context: ActionContext<State, State>): Promise<void> {
  context.state.assetsCreated = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_assets',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [aqsDateRange()],
  });
  context.state.assetsManaged = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_assets',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
  });
}

async function loadInspections(context: ActionContext<State, State>): Promise<void> {
  context.state.inspectionsCreated = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_inspections',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [aqsDateRange()],
  });
  context.state.inspectionsCompleted = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_inspections',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [
      {
        type: AqsItemType.And,
        children: [
          aqsDateRange(),
          {
            type: AqsItemType.Equals,
            children: [
              {
                type: AqsItemType.Attribute,
                properties: {
                  attributeCode: 'attributes_taskStatusTypesTreatAs',
                  path: 'root.attributes_tasksStatus.attributes_taskStatusesStatusType',
                },
              },
              {
                type: AqsItemType.String,
                properties: {
                  value: ['Closed'],
                },
              },
            ],
          },
        ],
      },
    ],
  });
}

async function loadJobs(context: ActionContext<State, State>): Promise<void> {
  context.state.jobsCreated = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_jobs',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [aqsDateRange()],
  });
  context.state.jobsCompleted = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_jobs',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [
      {
        type: AqsItemType.And,
        children: [
          aqsDateRange(),
          {
            type: AqsItemType.Equals,
            children: [
              {
                type: AqsItemType.Attribute,
                properties: {
                  attributeCode: 'attributes_taskStatusTypesTreatAs',
                  path: 'root.attributes_tasksStatus.attributes_taskStatusesStatusType',
                },
              },
              {
                type: AqsItemType.String,
                properties: {
                  value: ['Closed'],
                },
              },
            ],
          },
        ],
      },
    ],
  });
}

async function loadProjects(context: ActionContext<State, State>): Promise<void> {
  context.state.projectsCreated = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_projects',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [aqsDateRange()],
  });
}

async function loadDefects(context: ActionContext<State, State>): Promise<void> {
  context.state.defectsRaised = await getAqsCountResult(context, {
    type: AqsItemType.StatisticsAggregation,
    properties: {
      dodiCode: 'designInterfaces_defects',
      collectionCode: ['Live'],
      aggregationType: 'Count',
    },
    children: [aqsDateRange()],
  });
}

async function loadWorkflows(context: ActionContext<State, State>): Promise<void> {
  try {
    const service = new WorkflowServiceDefault({
      baseUrl: getApiUrl(getApiName()),
      defaultHeaders: {
        token: context.state.token ?? 'unknown',
      },
    });
    const result = await service.workflowList({
      page: 1,
      pageSize: 0,
    });
    context.state.workflowsActive = result.totalResults;
  } catch (e) {
    console.error('failed to get count of workflows');
    context.state.workflowsActive = 0;
  }
}

async function loadImports(context: ActionContext<State, State>): Promise<void> {
  try {
    const service = new ImportServiceDefault({
      baseUrl: getApiUrl(getApiName()),
      defaultHeaders: {
        token: context.state.token ?? 'unknown',
      },
    });
    const result = await service.importList({
      page: 1,
      pageSize: 0,
    });
    context.state.importsProcessed = result.totalResults;
  } catch (e) {
    console.error('failed to get count of imports');
    context.state.importsProcessed = 0;
  }
}

async function loadLayers(context: ActionContext<State, State>): Promise<void> {
  try {
    const service = new LayerServiceDefault({
      baseUrl: getApiUrl(getApiName()),
      defaultHeaders: {
        token: context.state.token ?? 'unknown',
      },
    });
    const result = await service.layerList({
      page: 1,
      pageSize: 0,
    });
    context.state.layersManaged = result.totalResults;
  } catch (e) {
    console.error('failed to get count of layers');
    context.state.layersManaged = 0;
  }
}

async function loadDesignsCustom(context: ActionContext<State, State>): Promise<void> {
  try {
    const service = new DodiServiceDefault({
      baseUrl: getApiUrl(getApiName()),
      defaultHeaders: {
        token: context.state.token ?? 'unknown',
      },
    });
    const result = await service.dodiList({
      context: Context.Customer,
      page: 1,
      pageSize: 0,
    });
    context.state.designsCustom = result.totalResults;
  } catch (e) {
    console.error('failed to get count of custom dodis');
    context.state.designsCustom = 0;
  }
}

async function loadWorkflowSeconds(context: ActionContext<State, State>): Promise<void> {
  try {
    const service = new QuotaUsageServiceDefault({
      baseUrl: getApiUrl(getApiName()),
      defaultHeaders: {
        token: context.state.token ?? 'unknown',
      },
    });
    const results = (
      await Promise.all([
        loadQuotaUsage(service, QuotaUsageComponent.TaskExecutor, 'Workflows', 1),
        loadQuotaUsage(service, QuotaUsageComponent.TaskExecutor, 'Workflows', 2),
        loadQuotaUsage(service, QuotaUsageComponent.TaskExecutor, 'Workflows', 3),
        loadQuotaUsage(service, QuotaUsageComponent.TaskExecutor, 'Workflows', 4),
      ])
    )
      .map((x) => x.results)
      .flat();
    context.state.workflowSeconds = results
      .map((x) => x.value)
      .reduce((prev, curr) => prev + curr, 0);
  } catch (e) {
    console.error('failed to get workflow seconds');
    context.state.workflowSeconds = 0;
  }
}

async function loadQuotaUsage(
  service: QuotaUsageService,
  component: QuotaUsageComponent,
  category: string,
  page: number,
): Promise<QuotaListUsageWebResponseModel> {
  return service.quotaUsageListQuotaUsage({
    category,
    component,
    start: StartOfYearIsoDate,
    end: EndOfYearIsoDate,
    page,
    pageSize: 100,
  });
}

async function getAqsCountResult(
  context: ActionContext<State, State>,
  aqs: AqsJsonNode,
): Promise<number> {
  try {
    const service = getAqsService(context);
    const result = await service.aqsStatisticsAggregation({
      requestBody: {
        aqs,
      },
    });
    if (result.results.length === 1) {
      if (typeof result.results[0].value.value === 'number') {
        return result.results[0].value.value;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } catch (e) {
    console.error('failed to get count result for aqs', aqs);
    return 0;
  }
}
