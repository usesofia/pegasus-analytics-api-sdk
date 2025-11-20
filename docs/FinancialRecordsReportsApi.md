# FinancialRecordsReportsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateAggregatedFinancialRecordsReport**](FinancialRecordsReportsApi.md#generateaggregatedfinancialrecordsreport) | **GET** /external/financial-records/aggregated/report | Gera relatório de lançamentos financeiros agregados por categoria, contato ou tag |
| [**generateMonthlyFinancialReport**](FinancialRecordsReportsApi.md#generatemonthlyfinancialreport) | **GET** /external/financial-records/aggregated-monthly/report | Gera relatório financeiro mensal para os últimos 12 meses |
| [**getAggregatedResultReport**](FinancialRecordsReportsApi.md#getaggregatedresultreport) | **GET** /external/financial-records/aggregated-result/report | Get aggregated result report for financial records |
| [**systemGetAggregatedResultReport**](FinancialRecordsReportsApi.md#systemgetaggregatedresultreport) | **GET** /internal/financial-records/aggregated-result/report | Get aggregated   result report for financial records |



## generateAggregatedFinancialRecordsReport

> AggregatedFinancialRecordsReportEntity generateAggregatedFinancialRecordsReport(account, amountFrom, amountTo, amountType, cashDateFrom, cashDateTo, competenceDateFrom, competenceDateTo, completed, contact, createdAtFrom, createdAtTo, direction, dueDateFrom, dueDateTo, filterId, finalAmountFrom, finalAmountTo, installmentFinancialRecord, recurringFinancialRecord, reconciled, subcategory, tags, considerInternalTransfers, sortOrder, aggregationDirection, groupBy)

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
    // string | Identificadores das contas separadas por vírgula (optional)
    account: 123,456,
    // string | Valor do lançamento mínimo. (optional)
    amountFrom: amountFrom_example,
    // string | Valor do lançamento máximo. (optional)
    amountTo: amountTo_example,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Data inicial do caixa (optional)
    cashDateFrom: 2025-01-01,
    // string | Data final do caixa (optional)
    cashDateTo: 2025-01-01,
    // string | Data inicial da competência (optional)
    competenceDateFrom: 2025-01-01,
    // string | Data final da competência (optional)
    competenceDateTo: 2025-01-01,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // string | ID do contato (optional)
    contact: 123,
    // string | Data inicial da criação (optional)
    createdAtFrom: 2025-01-01,
    // string | Data final da criação (optional)
    createdAtTo: 2025-01-01,
    // 'IN' | 'OUT' | Direção do relatório (optional)
    direction: direction_example,
    // string | Data inicial do vencimento (optional)
    dueDateFrom: 2025-01-01,
    // string | Data final do vencimento (optional)
    dueDateTo: 2025-01-01,
    // string | ID do filtro a ser aplicado à consulta. (optional)
    filterId: 123,
    // string | Valor final do lançamento mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor final do lançamento máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | ID do lançamento financeiro recorrente (optional)
    installmentFinancialRecord: 123,
    // string | ID do lançamento financeiro recorrente (optional)
    recurringFinancialRecord: 123,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | ID da subcategoria (optional)
    subcategory: 123,
    // string | IDs das tags (optional)
    tags: 123,456,
    // boolean | Se deve considerar transferências internas nos relatórios (optional)
    considerInternalTransfers: true,
    // 'asc' | 'desc' | Ordem de classificação (optional)
    sortOrder: sortOrder_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro (optional)
    aggregationDirection: aggregationDirection_example,
    // 'category' | 'contact' | 'tag' | Campo para agrupamento dos dados (optional)
    groupBy: groupBy_example,
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
| **account** | `string` | Identificadores das contas separadas por vírgula | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **cashDateFrom** | `string` | Data inicial do caixa | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data final do caixa | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data inicial da competência | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data final da competência | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data inicial da criação | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data final da criação | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do relatório | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **dueDateFrom** | `string` | Data inicial do vencimento | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data final do vencimento | [Optional] [Defaults to `undefined`] |
| **filterId** | `string` | ID do filtro a ser aplicado à consulta. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **considerInternalTransfers** | `boolean` | Se deve considerar transferências internas nos relatórios | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de classificação | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **aggregationDirection** | `IN`, `OUT` | Direção do lançamento financeiro | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **groupBy** | `category`, `contact`, `tag` | Campo para agrupamento dos dados | [Optional] [Defaults to `undefined`] [Enum: category, contact, tag] |

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

> MonthlyFinancialReportEntity generateMonthlyFinancialReport(account, amountFrom, amountTo, amountType, cashDateFrom, cashDateTo, competenceDateFrom, competenceDateTo, completed, contact, createdAtFrom, createdAtTo, direction, dueDateFrom, dueDateTo, filterId, finalAmountFrom, finalAmountTo, installmentFinancialRecord, recurringFinancialRecord, reconciled, subcategory, tags, considerInternalTransfers)

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
    // string | Identificadores das contas separadas por vírgula (optional)
    account: 123,456,
    // string | Valor do lançamento mínimo. (optional)
    amountFrom: amountFrom_example,
    // string | Valor do lançamento máximo. (optional)
    amountTo: amountTo_example,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Data inicial do caixa (optional)
    cashDateFrom: 2025-01-01,
    // string | Data final do caixa (optional)
    cashDateTo: 2025-01-01,
    // string | Data inicial da competência (optional)
    competenceDateFrom: 2025-01-01,
    // string | Data final da competência (optional)
    competenceDateTo: 2025-01-01,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // string | ID do contato (optional)
    contact: 123,
    // string | Data inicial da criação (optional)
    createdAtFrom: 2025-01-01,
    // string | Data final da criação (optional)
    createdAtTo: 2025-01-01,
    // 'IN' | 'OUT' | Direção do relatório (optional)
    direction: direction_example,
    // string | Data inicial do vencimento (optional)
    dueDateFrom: 2025-01-01,
    // string | Data final do vencimento (optional)
    dueDateTo: 2025-01-01,
    // string | ID do filtro a ser aplicado à consulta. (optional)
    filterId: 123,
    // string | Valor final do lançamento mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor final do lançamento máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | ID do lançamento financeiro recorrente (optional)
    installmentFinancialRecord: 123,
    // string | ID do lançamento financeiro recorrente (optional)
    recurringFinancialRecord: 123,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | ID da subcategoria (optional)
    subcategory: 123,
    // string | IDs das tags (optional)
    tags: 123,456,
    // boolean | Se deve considerar transferências internas nos relatórios (optional)
    considerInternalTransfers: true,
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
| **account** | `string` | Identificadores das contas separadas por vírgula | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **cashDateFrom** | `string` | Data inicial do caixa | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data final do caixa | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data inicial da competência | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data final da competência | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data inicial da criação | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data final da criação | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do relatório | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **dueDateFrom** | `string` | Data inicial do vencimento | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data final do vencimento | [Optional] [Defaults to `undefined`] |
| **filterId** | `string` | ID do filtro a ser aplicado à consulta. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **considerInternalTransfers** | `boolean` | Se deve considerar transferências internas nos relatórios | [Optional] [Defaults to `undefined`] |

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

> FinancialRecordsAggregatedResultReportEntity getAggregatedResultReport(account, amountFrom, amountTo, amountType, cashDateFrom, cashDateTo, competenceDateFrom, competenceDateTo, completed, contact, createdAtFrom, createdAtTo, direction, dueDateFrom, dueDateTo, filterId, finalAmountFrom, finalAmountTo, installmentFinancialRecord, recurringFinancialRecord, reconciled, subcategory, tags)

Get aggregated result report for financial records

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
    // string | Identificadores das contas separadas por vírgula (optional)
    account: 123,456,
    // string | Valor do lançamento mínimo. (optional)
    amountFrom: amountFrom_example,
    // string | Valor do lançamento máximo. (optional)
    amountTo: amountTo_example,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Data inicial do caixa (optional)
    cashDateFrom: 2025-01-01,
    // string | Data final do caixa (optional)
    cashDateTo: 2025-01-01,
    // string | Data inicial da competência (optional)
    competenceDateFrom: 2025-01-01,
    // string | Data final da competência (optional)
    competenceDateTo: 2025-01-01,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // string | ID do contato (optional)
    contact: 123,
    // string | Data inicial da criação (optional)
    createdAtFrom: 2025-01-01,
    // string | Data final da criação (optional)
    createdAtTo: 2025-01-01,
    // 'IN' | 'OUT' | Direção do relatório (optional)
    direction: direction_example,
    // string | Data inicial do vencimento (optional)
    dueDateFrom: 2025-01-01,
    // string | Data final do vencimento (optional)
    dueDateTo: 2025-01-01,
    // string | ID do filtro a ser aplicado à consulta. (optional)
    filterId: 123,
    // string | Valor final do lançamento mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor final do lançamento máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | ID do lançamento financeiro recorrente (optional)
    installmentFinancialRecord: 123,
    // string | ID do lançamento financeiro recorrente (optional)
    recurringFinancialRecord: 123,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | ID da subcategoria (optional)
    subcategory: 123,
    // string | IDs das tags (optional)
    tags: 123,456,
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
| **account** | `string` | Identificadores das contas separadas por vírgula | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **cashDateFrom** | `string` | Data inicial do caixa | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data final do caixa | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data inicial da competência | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data final da competência | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data inicial da criação | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data final da criação | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do relatório | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **dueDateFrom** | `string` | Data inicial do vencimento | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data final do vencimento | [Optional] [Defaults to `undefined`] |
| **filterId** | `string` | ID do filtro a ser aplicado à consulta. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |

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

> FinancialRecordsAggregatedResultReportEntity systemGetAggregatedResultReport(account, amountFrom, amountTo, amountType, cashDateFrom, cashDateTo, competenceDateFrom, competenceDateTo, completed, contact, createdAtFrom, createdAtTo, direction, dueDateFrom, dueDateTo, filterId, finalAmountFrom, finalAmountTo, installmentFinancialRecord, recurringFinancialRecord, reconciled, subcategory, tags)

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
    // string | Identificadores das contas separadas por vírgula (optional)
    account: 123,456,
    // string | Valor do lançamento mínimo. (optional)
    amountFrom: amountFrom_example,
    // string | Valor do lançamento máximo. (optional)
    amountTo: amountTo_example,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Data inicial do caixa (optional)
    cashDateFrom: 2025-01-01,
    // string | Data final do caixa (optional)
    cashDateTo: 2025-01-01,
    // string | Data inicial da competência (optional)
    competenceDateFrom: 2025-01-01,
    // string | Data final da competência (optional)
    competenceDateTo: 2025-01-01,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // string | ID do contato (optional)
    contact: 123,
    // string | Data inicial da criação (optional)
    createdAtFrom: 2025-01-01,
    // string | Data final da criação (optional)
    createdAtTo: 2025-01-01,
    // 'IN' | 'OUT' | Direção do relatório (optional)
    direction: direction_example,
    // string | Data inicial do vencimento (optional)
    dueDateFrom: 2025-01-01,
    // string | Data final do vencimento (optional)
    dueDateTo: 2025-01-01,
    // string | ID do filtro a ser aplicado à consulta. (optional)
    filterId: 123,
    // string | Valor final do lançamento mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor final do lançamento máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | ID do lançamento financeiro recorrente (optional)
    installmentFinancialRecord: 123,
    // string | ID do lançamento financeiro recorrente (optional)
    recurringFinancialRecord: 123,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | ID da subcategoria (optional)
    subcategory: 123,
    // string | IDs das tags (optional)
    tags: 123,456,
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
| **account** | `string` | Identificadores das contas separadas por vírgula | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **cashDateFrom** | `string` | Data inicial do caixa | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data final do caixa | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data inicial da competência | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data final da competência | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data inicial da criação | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data final da criação | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do relatório | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **dueDateFrom** | `string` | Data inicial do vencimento | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data final do vencimento | [Optional] [Defaults to `undefined`] |
| **filterId** | `string` | ID do filtro a ser aplicado à consulta. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |

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

