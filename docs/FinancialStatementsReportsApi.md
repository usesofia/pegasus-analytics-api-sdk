# FinancialStatementsReportsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateFinancialMeasuresReport**](FinancialStatementsReportsApi.md#generatefinancialmeasuresreport) | **GET** /external/financial-statements/financial-measures-report | Gera relatório de medidas financeiras |
| [**generateFinancialResultCompositionReport**](FinancialStatementsReportsApi.md#generatefinancialresultcompositionreport) | **GET** /external/financial-statements/result-composition/report | Gera relatório de composição do resultado financeiro |
| [**generateFinancialStatementReport**](FinancialStatementsReportsApi.md#generatefinancialstatementreport) | **GET** /external/financial-statements/report | Gera relatório de demonstrativo financeiro com opções de agrupamento e filtros |
| [**systemGenerateFinancialStatementReport**](FinancialStatementsReportsApi.md#systemgeneratefinancialstatementreport) | **GET** /internal/financial-statements/report | Generate financial statement report for system use |



## generateFinancialMeasuresReport

> FinancialMeasuresReportEntity generateFinancialMeasuresReport(recurringFinancialRecord, installmentFinancialRecord, amountTo, amountFrom, finalAmountTo, finalAmountFrom, account, reconciled, completed, amountType, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, direction)

Gera relatório de medidas financeiras

### Example

```ts
import {
  Configuration,
  FinancialStatementsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GenerateFinancialMeasuresReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialStatementsReportsApi();

  const body = {
    // string | ID do lançamento financeiro recorrente (optional)
    recurringFinancialRecord: 123,
    // string | ID do lançamento financeiro recorrente (optional)
    installmentFinancialRecord: 123,
    // string | Valor do lançamento máximo. (optional)
    amountTo: amountTo_example,
    // string | Valor do lançamento mínimo. (optional)
    amountFrom: amountFrom_example,
    // string | Valor final do lançamento máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | Valor final do lançamento mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | ID da conta (optional)
    account: 123,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | IDs das tags (optional)
    tags: 123,456,
    // string | Data final da criação (optional)
    createdAtTo: 2025-01-01,
    // string | Data inicial da criação (optional)
    createdAtFrom: 2025-01-01,
    // string | Data final do caixa (optional)
    cashDateTo: 2025-01-01,
    // string | Data inicial do caixa (optional)
    cashDateFrom: 2025-01-01,
    // string | Data final da competência (optional)
    competenceDateTo: 2025-01-01,
    // string | Data inicial da competência (optional)
    competenceDateFrom: 2025-01-01,
    // string | ID da subcategoria (optional)
    subcategory: 123,
    // string | ID do contato (optional)
    contact: 123,
    // string | Data final do vencimento (optional)
    dueDateTo: 2025-01-01,
    // string | Data inicial do vencimento (optional)
    dueDateFrom: 2025-01-01,
    // 'IN' | 'OUT' | Direção do relatório (optional)
    direction: direction_example,
  } satisfies GenerateFinancialMeasuresReportRequest;

  try {
    const data = await api.generateFinancialMeasuresReport(body);
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
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **account** | `string` | ID da conta | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data final da criação | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data inicial da criação | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data final do caixa | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data inicial do caixa | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data final da competência | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data inicial da competência | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data final do vencimento | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data inicial do vencimento | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do relatório | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |

### Return type

[**FinancialMeasuresReportEntity**](FinancialMeasuresReportEntity.md)

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


## generateFinancialResultCompositionReport

> FinancialResultCompositionReportEntity generateFinancialResultCompositionReport(tags, subcategory, reconciled, recurringFinancialRecord, installmentFinancialRecord, finalAmountTo, finalAmountFrom, dueDateTo, dueDateFrom, direction, createdAtTo, createdAtFrom, contact, completed, competenceDateTo, competenceDateFrom, cashDateTo, cashDateFrom, amountType, amountTo, amountFrom, account)

Gera relatório de composição do resultado financeiro

### Example

```ts
import {
  Configuration,
  FinancialStatementsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GenerateFinancialResultCompositionReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialStatementsReportsApi();

  const body = {
    // string | IDs das tags (optional)
    tags: 123,456,
    // string | ID da subcategoria (optional)
    subcategory: 123,
    // string | Status de conciliação (optional)
    reconciled: true,false,
    // string | ID do lançamento financeiro recorrente (optional)
    recurringFinancialRecord: 123,
    // string | ID do lançamento financeiro recorrente (optional)
    installmentFinancialRecord: 123,
    // string | Valor final do lançamento máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | Valor final do lançamento mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Data final do vencimento (optional)
    dueDateTo: 2025-01-01,
    // string | Data inicial do vencimento (optional)
    dueDateFrom: 2025-01-01,
    // 'IN' | 'OUT' | Direção do relatório (optional)
    direction: direction_example,
    // string | Data final da criação (optional)
    createdAtTo: 2025-01-01,
    // string | Data inicial da criação (optional)
    createdAtFrom: 2025-01-01,
    // string | ID do contato (optional)
    contact: 123,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // string | Data final da competência (optional)
    competenceDateTo: 2025-01-01,
    // string | Data inicial da competência (optional)
    competenceDateFrom: 2025-01-01,
    // string | Data final do caixa (optional)
    cashDateTo: 2025-01-01,
    // string | Data inicial do caixa (optional)
    cashDateFrom: 2025-01-01,
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. \"base\" para amount, \"final\" para finalAmount. Padrão é \"final\". (optional)
    amountType: amountType_example,
    // string | Valor do lançamento máximo. (optional)
    amountTo: amountTo_example,
    // string | Valor do lançamento mínimo. (optional)
    amountFrom: amountFrom_example,
    // string | Identificadores das contas separadas por vírgula (optional)
    account: 123,456,
  } satisfies GenerateFinancialResultCompositionReportRequest;

  try {
    const data = await api.generateFinancialResultCompositionReport(body);
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
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria | [Optional] [Defaults to `undefined`] |
| **reconciled** | `string` | Status de conciliação | [Optional] [Defaults to `undefined`] |
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro recorrente | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data final do vencimento | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data inicial do vencimento | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do relatório | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **createdAtTo** | `string` | Data final da criação | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data inicial da criação | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data final da competência | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data inicial da competência | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data final do caixa | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data inicial do caixa | [Optional] [Defaults to `undefined`] |
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. \&quot;base\&quot; para amount, \&quot;final\&quot; para finalAmount. Padrão é \&quot;final\&quot;. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **amountTo** | `string` | Valor do lançamento máximo. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento mínimo. | [Optional] [Defaults to `undefined`] |
| **account** | `string` | Identificadores das contas separadas por vírgula | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialResultCompositionReportEntity**](FinancialResultCompositionReportEntity.md)

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


## generateFinancialStatementReport

> FinancialStatementReportEntity generateFinancialStatementReport(referenceDate, periodTo, periodFrom, grouping, tags, completed)

Gera relatório de demonstrativo financeiro com opções de agrupamento e filtros

Gera relatório de demonstrativo financeiro com opções de agrupamento e filtros

### Example

```ts
import {
  Configuration,
  FinancialStatementsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GenerateFinancialStatementReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialStatementsReportsApi();

  const body = {
    // 'dueDate' | 'cashDate' | 'competenceDate' | Campo de data a ser utilizado para filtros
    referenceDate: referenceDate_example,
    // string | Período do relatório
    periodTo: 2025-01-01,
    // string | Período do relatório
    periodFrom: 2025-01-01,
    // 'daily' | 'monthly' | 'yearly' | Agrupamento do relatório
    grouping: grouping_example,
    // string | IDs das tags (optional)
    tags: 123,456,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true|false,
  } satisfies GenerateFinancialStatementReportRequest;

  try {
    const data = await api.generateFinancialStatementReport(body);
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
| **referenceDate** | `dueDate`, `cashDate`, `competenceDate` | Campo de data a ser utilizado para filtros | [Defaults to `undefined`] [Enum: dueDate, cashDate, competenceDate] |
| **periodTo** | `string` | Período do relatório | [Defaults to `undefined`] |
| **periodFrom** | `string` | Período do relatório | [Defaults to `undefined`] |
| **grouping** | `daily`, `monthly`, `yearly` | Agrupamento do relatório | [Defaults to `undefined`] [Enum: daily, monthly, yearly] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |

### Return type

[**FinancialStatementReportEntity**](FinancialStatementReportEntity.md)

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


## systemGenerateFinancialStatementReport

> FinancialStatementReportEntity systemGenerateFinancialStatementReport(ownerOrganizationId, periodTo, periodFrom, grouping, tags, completed, referenceDate)

Generate financial statement report for system use

### Example

```ts
import {
  Configuration,
  FinancialStatementsReportsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { SystemGenerateFinancialStatementReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FinancialStatementsReportsApi();

  const body = {
    // string | Identificador da organização proprietária dos lançamentos financeiros.
    ownerOrganizationId: ownerOrganizationId_example,
    // string | Período do relatório
    periodTo: 2025-01-01,
    // string | Período do relatório
    periodFrom: 2025-01-01,
    // 'daily' | 'monthly' | 'yearly' | Agrupamento do relatório
    grouping: grouping_example,
    // string | IDs das tags (optional)
    tags: 123,456,
    // string | Status de conclusão dos lançamentos (optional)
    completed: true,false,
    // 'dueDate' | 'cashDate' | 'competenceDate' | Campo de data a ser utilizado para filtros (optional)
    referenceDate: referenceDate_example,
  } satisfies SystemGenerateFinancialStatementReportRequest;

  try {
    const data = await api.systemGenerateFinancialStatementReport(body);
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
| **periodTo** | `string` | Período do relatório | [Defaults to `undefined`] |
| **periodFrom** | `string` | Período do relatório | [Defaults to `undefined`] |
| **grouping** | `daily`, `monthly`, `yearly` | Agrupamento do relatório | [Defaults to `undefined`] [Enum: daily, monthly, yearly] |
| **tags** | `string` | IDs das tags | [Optional] [Defaults to `undefined`] |
| **completed** | `string` | Status de conclusão dos lançamentos | [Optional] [Defaults to `undefined`] |
| **referenceDate** | `dueDate`, `cashDate`, `competenceDate` | Campo de data a ser utilizado para filtros | [Optional] [Defaults to `undefined`] [Enum: dueDate, cashDate, competenceDate] |

### Return type

[**FinancialStatementReportEntity**](FinancialStatementReportEntity.md)

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

