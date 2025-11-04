# FinancialRecordsReportsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateAggregatedFinancialRecordsReport**](FinancialRecordsReportsApi.md#generateaggregatedfinancialrecordsreport) | **GET** /external/financial-records/aggregated/report | Gera relatório de lançamentos financeiros agregados por categoria, contato ou tag |
| [**generateMonthlyFinancialReport**](FinancialRecordsReportsApi.md#generatemonthlyfinancialreport) | **GET** /external/financial-records/aggregated-monthly/report | Gera relatório financeiro mensal para os últimos 12 meses |
| [**getAggregatedResultReport**](FinancialRecordsReportsApi.md#getaggregatedresultreport) | **GET** /external/financial-records/aggregated-result/report | Get aggregated   result report for financial records |
| [**systemGetAggregatedResultReport**](FinancialRecordsReportsApi.md#systemgetaggregatedresultreport) | **GET** /internal/financial-records/aggregated-result/report | Get aggregated   result report for financial records |



## generateAggregatedFinancialRecordsReport

> AggregatedFinancialRecordsReportEntity generateAggregatedFinancialRecordsReport(aggregationDirection, groupBy, amountType, recurringFinancialRecord, installmentFinancialRecord, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, direction, sortOrder)

Gera relatório de lançamentos financeiros agregados por categoria, contato ou tag

### Example

```ts
import {
  Configuration,
  FinancialRecordsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GenerateAggregatedFinancialRecordsReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialRecordsReportsApi();

  const body = {
    // 'IN' | 'OUT' | Direção do lançamento financeiro
    aggregationDirection: aggregationDirection_example,
    // 'category' | 'contact' | 'tag' | Campo para agrupamento dos dados
    groupBy: groupBy_example,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos (optional)
    amountType: amountType_example,
    // string | IDs do lançamento financeiro recorrente separados por vírgula (optional)
    recurringFinancialRecord: 123,456,
    // string | IDs do lançamento financeiro parcelado separados por vírgula (optional)
    installmentFinancialRecord: 123,456,
    // string | Conta do lançamento financeiro (optional)
    account: 123,
    // string | Status de conciliação dos lançamentos (optional)
    reconciled: true,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,
    // string | Tags do lançamento financeiro separadas por vírgula (optional)
    tags: 123,456,
    // string | Data de criação final (optional)
    createdAtTo: 2025-01-01T00:00:00.000Z,
    // string | Data de criação inicial (optional)
    createdAtFrom: 2025-01-01T00:00:00.000Z,
    // string | Data de caixa final (optional)
    cashDateTo: 2025-01-01,
    // string | Data de caixa inicial (optional)
    cashDateFrom: 2025-01-01,
    // string | Data de competência final (optional)
    competenceDateTo: 2025-01-01,
    // string | Data de competência inicial (optional)
    competenceDateFrom: 2025-01-01,
    // string | Subcategoria do lançamento financeiro (optional)
    subcategory: 123,
    // string | Contato do lançamento financeiro (optional)
    contact: 123,
    // string | Data de vencimento final (optional)
    dueDateTo: 2025-01-01,
    // string | Data de vencimento inicial (optional)
    dueDateFrom: 2025-01-01,
    // 'IN' | 'OUT' | Direção do lançamento financeiro (optional)
    direction: direction_example,
    // 'asc' | 'desc' | Ordem de classificação (optional)
    sortOrder: sortOrder_example,
  } satisfies GenerateAggregatedFinancialRecordsReportRequest;

  try {
    const data = await api.generateAggregatedFinancialRecordsReport(body);
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
| **aggregationDirection** | `IN`, `OUT` | Direção do lançamento financeiro | [Defaults to `undefined`] [Enum: IN, OUT] |
| **groupBy** | `category`, `contact`, `tag` | Campo para agrupamento dos dados | [Defaults to `undefined`] [Enum: category, contact, tag] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **recurringFinancialRecord** | `string` | IDs do lançamento financeiro recorrente separados por vírgula | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | IDs do lançamento financeiro parcelado separados por vírgula | [Optional] [Defaults to `undefined`] |
| **account** | `string` | Conta do lançamento financeiro | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação dos lançamentos | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Tags do lançamento financeiro separadas por vírgula | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de caixa final | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de caixa inicial | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | Subcategoria do lançamento financeiro | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Contato do lançamento financeiro | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **sortOrder** | `asc`, `desc` | Ordem de classificação | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |

### Return type

[**AggregatedFinancialRecordsReportEntity**](AggregatedFinancialRecordsReportEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateMonthlyFinancialReport

> MonthlyFinancialReportEntity generateMonthlyFinancialReport(amountType, tags, account, reconciled, completed, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, direction)

Gera relatório financeiro mensal para os últimos 12 meses

### Example

```ts
import {
  Configuration,
  FinancialRecordsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GenerateMonthlyFinancialReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialRecordsReportsApi();

  const body = {
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Tags do lançamento financeiro separadas por vírgula (optional)
    tags: 123,456,
    // string | Conta do lançamento financeiro (optional)
    account: 123,
    // string | Status de conciliação dos lançamentos (optional)
    reconciled: true,false,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // string | Data de pagamento final (optional)
    cashDateTo: 2025-01-01,
    // string | Data de pagamento inicial (optional)
    cashDateFrom: 2025-01-01,
    // string | Data de competência final (optional)
    competenceDateTo: 2025-01-01,
    // string | Data de competência inicial (optional)
    competenceDateFrom: 2025-01-01,
    // string | Subcategoria do lançamento financeiro (optional)
    subcategory: 123,
    // string | Contato do lançamento financeiro (optional)
    contact: 123,
    // string | Data de vencimento final (optional)
    dueDateTo: 2025-01-01,
    // string | Data de vencimento inicial (optional)
    dueDateFrom: 2025-01-01,
    // 'IN' | 'OUT' | Direção do lançamento financeiro (optional)
    direction: direction_example,
  } satisfies GenerateMonthlyFinancialReportRequest;

  try {
    const data = await api.generateMonthlyFinancialReport(body);
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
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **tags** | `string` | Tags do lançamento financeiro separadas por vírgula | [Optional] [Defaults to `undefined`] |
| **account** | `string` | Conta do lançamento financeiro | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação dos lançamentos | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de pagamento final | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de pagamento inicial | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | Subcategoria do lançamento financeiro | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Contato do lançamento financeiro | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |

### Return type

[**MonthlyFinancialReportEntity**](MonthlyFinancialReportEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAggregatedResultReport

> FinancialRecordsAggregatedResultReportEntity getAggregatedResultReport(amountType, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, direction)

Get aggregated   result report for financial records

### Example

```ts
import {
  Configuration,
  FinancialRecordsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetAggregatedResultReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialRecordsReportsApi();

  const body = {
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Conta do lançamento financeiro. (optional)
    account: account_example,
    // boolean | Indica se o lançamento financeiro foi reconciliado. (optional)
    reconciled: true,
    // boolean | Indica se o lançamento financeiro foi completado. (optional)
    completed: true,
    // string | Tags do lançamento financeiro separadas por vírgula. (optional)
    tags: tags_example,
    // string | Data de criação final. (optional)
    createdAtTo: createdAtTo_example,
    // string | Data de criação inicial. (optional)
    createdAtFrom: createdAtFrom_example,
    // string | Data de pagamento final. (optional)
    cashDateTo: cashDateTo_example,
    // string | Data de pagamento inicial. (optional)
    cashDateFrom: cashDateFrom_example,
    // string | Data de competência final. (optional)
    competenceDateTo: competenceDateTo_example,
    // string | Data de competência inicial. (optional)
    competenceDateFrom: competenceDateFrom_example,
    // string | Subcategoria do lançamento financeiro. (optional)
    subcategory: subcategory_example,
    // string | Contato do lançamento financeiro. (optional)
    contact: contact_example,
    // string | Data de vencimento final. (optional)
    dueDateTo: dueDateTo_example,
    // string | Data de vencimento inicial. (optional)
    dueDateFrom: dueDateFrom_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro. (optional)
    direction: direction_example,
  } satisfies GetAggregatedResultReportRequest;

  try {
    const data = await api.getAggregatedResultReport(body);
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
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **account** | `string` | Conta do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **reconciled** | `boolean` | Indica se o lançamento financeiro foi reconciliado. | [Optional] [Defaults to `undefined`] |
| **completed** | `boolean` | Indica se o lançamento financeiro foi completado. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Tags do lançamento financeiro separadas por vírgula. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de pagamento final. | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de pagamento inicial. | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final. | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | Subcategoria do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Contato do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final. | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |

### Return type

[**FinancialRecordsAggregatedResultReportEntity**](FinancialRecordsAggregatedResultReportEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemGetAggregatedResultReport

> FinancialRecordsAggregatedResultReportEntity systemGetAggregatedResultReport(ownerOrganizationId, amountType, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, direction)

Get aggregated   result report for financial records

### Example

```ts
import {
  Configuration,
  FinancialRecordsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { SystemGetAggregatedResultReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialRecordsReportsApi();

  const body = {
    // string | Identificador da organização proprietária dos lançamentos financeiros.
    ownerOrganizationId: ownerOrganizationId_example,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Conta do lançamento financeiro. (optional)
    account: account_example,
    // boolean | Indica se o lançamento financeiro foi reconciliado. (optional)
    reconciled: true,
    // boolean | Indica se o lançamento financeiro foi completado. (optional)
    completed: true,
    // string | Tags do lançamento financeiro separadas por vírgula. (optional)
    tags: tags_example,
    // string | Data de criação final. (optional)
    createdAtTo: createdAtTo_example,
    // string | Data de criação inicial. (optional)
    createdAtFrom: createdAtFrom_example,
    // string | Data de pagamento final. (optional)
    cashDateTo: cashDateTo_example,
    // string | Data de pagamento inicial. (optional)
    cashDateFrom: cashDateFrom_example,
    // string | Data de competência final. (optional)
    competenceDateTo: competenceDateTo_example,
    // string | Data de competência inicial. (optional)
    competenceDateFrom: competenceDateFrom_example,
    // string | Subcategoria do lançamento financeiro. (optional)
    subcategory: subcategory_example,
    // string | Contato do lançamento financeiro. (optional)
    contact: contact_example,
    // string | Data de vencimento final. (optional)
    dueDateTo: dueDateTo_example,
    // string | Data de vencimento inicial. (optional)
    dueDateFrom: dueDateFrom_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro. (optional)
    direction: direction_example,
  } satisfies SystemGetAggregatedResultReportRequest;

  try {
    const data = await api.systemGetAggregatedResultReport(body);
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
| **ownerOrganizationId** | `string` | Identificador da organização proprietária dos lançamentos financeiros. | [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **account** | `string` | Conta do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **reconciled** | `boolean` | Indica se o lançamento financeiro foi reconciliado. | [Optional] [Defaults to `undefined`] |
| **completed** | `boolean` | Indica se o lançamento financeiro foi completado. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | Tags do lançamento financeiro separadas por vírgula. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de pagamento final. | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de pagamento inicial. | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final. | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | Subcategoria do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Contato do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final. | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |

### Return type

[**FinancialRecordsAggregatedResultReportEntity**](FinancialRecordsAggregatedResultReportEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

