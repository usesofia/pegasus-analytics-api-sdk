# BankAccountsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBankAccountsReport**](BankAccountsApi.md#getbankaccountsreport) | **GET** /external/bank-accounts/report | Gera relatório de contas bancárias |



## getBankAccountsReport

> BankAccountsDashboardReportEntity getBankAccountsReport(amountType, recurringFinancialRecord, installmentFinancialRecord, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, direction)

Gera relatório de contas bancárias

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetBankAccountsReportRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // 'base' | 'final' | Tipo de valor a ser utilizado nos cálculos. (optional)
    amountType: amountType_example,
    // string | ID do lançamento financeiro recorrente. (optional)
    recurringFinancialRecord: recurringFinancialRecord_example,
    // string | ID do lançamento financeiro parcelado. (optional)
    installmentFinancialRecord: installmentFinancialRecord_example,
    // string | ID da conta bancária. (optional)
    account: account_example,
    // boolean | Status de conciliação dos lançamentos. (optional)
    reconciled: true,
    // boolean | Status de conclusão dos lançamentos. (optional)
    completed: true,
    // string | IDs das tags separadas por vírgula. (optional)
    tags: tags_example,
    // string | Data de criação final. (optional)
    createdAtTo: createdAtTo_example,
    // string | Data de criação inicial. (optional)
    createdAtFrom: createdAtFrom_example,
    // string | Data de caixa final. (optional)
    cashDateTo: cashDateTo_example,
    // string | Data de caixa inicial. (optional)
    cashDateFrom: cashDateFrom_example,
    // string | Data de competência final. (optional)
    competenceDateTo: competenceDateTo_example,
    // string | Data de competência inicial. (optional)
    competenceDateFrom: competenceDateFrom_example,
    // string | ID da subcategoria. (optional)
    subcategory: subcategory_example,
    // string | ID do contato. (optional)
    contact: contact_example,
    // string | Data de vencimento final. (optional)
    dueDateTo: dueDateTo_example,
    // string | Data de vencimento inicial. (optional)
    dueDateFrom: dueDateFrom_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro. (optional)
    direction: direction_example,
  } satisfies GetBankAccountsReportRequest;

  try {
    const data = await api.getBankAccountsReport(body);
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
| **amountType** | `base`, `final` | Tipo de valor a ser utilizado nos cálculos. | [Optional] [Defaults to `undefined`] [Enum: base, final] |
| **recurringFinancialRecord** | `string` | ID do lançamento financeiro recorrente. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do lançamento financeiro parcelado. | [Optional] [Defaults to `undefined`] |
| **account** | `string` | ID da conta bancária. | [Optional] [Defaults to `undefined`] |
| **reconciled** | `boolean` | Status de conciliação dos lançamentos. | [Optional] [Defaults to `undefined`] |
| **completed** | `boolean` | Status de conclusão dos lançamentos. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags separadas por vírgula. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de caixa final. | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de caixa inicial. | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final. | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final. | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |

### Return type

[**BankAccountsDashboardReportEntity**](BankAccountsDashboardReportEntity.md)

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

