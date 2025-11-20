# CashFlowReportsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateCashFlowReport**](CashFlowReportsApi.md#generatecashflowreport) | **GET** /external/cash-flow/report | Gera um relatório de fluxo de caixa |
| [**getCurrentMonthCashFlow**](CashFlowReportsApi.md#getcurrentmonthcashflow) | **GET** /external/cash-flow/current-month | Obtém o fluxo de caixa do mês atual por direção |
| [**getProjectedCashFlow**](CashFlowReportsApi.md#getprojectedcashflow) | **GET** /external/cash-flow/projected | Obtém o fluxo de caixa projetado de D-3 a D+8 |



## generateCashFlowReport

> CashFlowReportEntity generateCashFlowReport(filterId, tags, reconciled, bankAccounts, periodTo, periodFrom, grouping)

Gera um relatório de fluxo de caixa

### Example

```ts
import {
  Configuration,
  CashFlowReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GenerateCashFlowReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new CashFlowReportsApi();

  const body = {
    // string | ID do filtro a ser aplicado à consulta. (optional)
    filterId: 123,
    // string | IDs das tags (optional)
    tags: 123,456,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | IDs das contas bancárias (optional)
    bankAccounts: 123,456,
    // string | Data final do período (optional)
    periodTo: 2025-01-01,
    // string | Data inicial do período (optional)
    periodFrom: 2025-01-01,
    // 'daily' | 'monthly' | 'yearly' | Agrupamento do relatório (optional)
    grouping: grouping_example,
  } satisfies GenerateCashFlowReportRequest;

  try {
    const data = await api.generateCashFlowReport(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **filterId** | `string` | ID do filtro a ser aplicado à consulta. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **bankAccounts** | `string` | IDs das contas bancárias | [Optional] [Defaults to `undefined`] |
| **periodTo** | `string` | Data final do período | [Optional] [Defaults to `undefined`] |
| **periodFrom** | `string` | Data inicial do período | [Optional] [Defaults to `undefined`] |
| **grouping** | `daily`, `monthly`, `yearly` | Agrupamento do relatório | [Optional] [Defaults to `undefined`] [Enum: daily, monthly, yearly] |

### Return type

[**CashFlowReportEntity**](CashFlowReportEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Relatório de fluxo de caixa gerado com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCurrentMonthCashFlow

> CurrentMonthCashFlowEntity getCurrentMonthCashFlow(direction)

Obtém o fluxo de caixa do mês atual por direção

### Example

```ts
import {
  Configuration,
  CashFlowReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetCurrentMonthCashFlowRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new CashFlowReportsApi();

  const body = {
    // 'IN' | 'OUT' | Direção do lançamento (IN ou OUT)
    direction: direction_example,
  } satisfies GetCurrentMonthCashFlowRequest;

  try {
    const data = await api.getCurrentMonthCashFlow(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **direction** | `IN`, `OUT` | Direção do lançamento (IN ou OUT) | [Defaults to `undefined`] [Enum: IN, OUT] |

### Return type

[**CurrentMonthCashFlowEntity**](CurrentMonthCashFlowEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fluxo de caixa do mês atual obtido com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getProjectedCashFlow

> ProjectedCashFlowEntity getProjectedCashFlow()

Obtém o fluxo de caixa projetado de D-3 a D+8

### Example

```ts
import {
  Configuration,
  CashFlowReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetProjectedCashFlowRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new CashFlowReportsApi();

  try {
    const data = await api.getProjectedCashFlow();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ProjectedCashFlowEntity**](ProjectedCashFlowEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Fluxo de caixa projetado obtido com sucesso |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

