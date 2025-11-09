# @usesofia/pegasus-analytics-api-sdk@2.0.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @usesofia/pegasus-analytics-api-sdk --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BankAccountsApi* | [**getBankAccountsReport**](docs/BankAccountsApi.md#getbankaccountsreport) | **GET** /external/bank-accounts/report | Gera relatório de contas bancárias
*CacheApi* | [**getCacheValue**](docs/CacheApi.md#getcachevalue) | **GET** /external/cache | Get string value from cache
*CacheApi* | [**setCacheValue**](docs/CacheApi.md#setcachevalue) | **PUT** /external/cache | Set string value in cache with 10-second TTL
*CashFlowReportsApi* | [**generateCashFlowReport**](docs/CashFlowReportsApi.md#generatecashflowreport) | **GET** /external/cash-flow/report | Gera um relatório de fluxo de caixa
*CashFlowReportsApi* | [**getCurrentMonthCashFlow**](docs/CashFlowReportsApi.md#getcurrentmonthcashflow) | **GET** /external/cash-flow/current-month | Obtém o fluxo de caixa do mês atual por direção
*CashFlowReportsApi* | [**getProjectedCashFlow**](docs/CashFlowReportsApi.md#getprojectedcashflow) | **GET** /external/cash-flow/projected | Obtém o fluxo de caixa projetado de D-3 a D+8
*FinancialRecordsReportsApi* | [**generateAggregatedFinancialRecordsReport**](docs/FinancialRecordsReportsApi.md#generateaggregatedfinancialrecordsreport) | **GET** /external/financial-records/aggregated/report | Gera relatório de lançamentos financeiros agregados por categoria, contato ou tag
*FinancialRecordsReportsApi* | [**generateMonthlyFinancialReport**](docs/FinancialRecordsReportsApi.md#generatemonthlyfinancialreport) | **GET** /external/financial-records/aggregated-monthly/report | Gera relatório financeiro mensal para os últimos 12 meses
*FinancialRecordsReportsApi* | [**getAggregatedResultReport**](docs/FinancialRecordsReportsApi.md#getaggregatedresultreport) | **GET** /external/financial-records/aggregated-result/report | Get aggregated result report for financial records
*FinancialRecordsReportsApi* | [**systemGetAggregatedResultReport**](docs/FinancialRecordsReportsApi.md#systemgetaggregatedresultreport) | **GET** /internal/financial-records/aggregated-result/report | Get aggregated   result report for financial records
*FinancialStatementsReportsApi* | [**generateFinancialMeasuresReport**](docs/FinancialStatementsReportsApi.md#generatefinancialmeasuresreport) | **GET** /external/financial-statements/financial-measures-report | Gera relatório de medidas financeiras
*FinancialStatementsReportsApi* | [**generateFinancialResultCompositionReport**](docs/FinancialStatementsReportsApi.md#generatefinancialresultcompositionreport) | **GET** /external/financial-statements/result-composition/report | Gera relatório de composição do resultado financeiro
*FinancialStatementsReportsApi* | [**generateFinancialStatementReport**](docs/FinancialStatementsReportsApi.md#generatefinancialstatementreport) | **GET** /external/financial-statements/report | Gera relatório de demonstrativo financeiro com opções de agrupamento e filtros
*FinancialStatementsReportsApi* | [**systemGenerateFinancialStatementReport**](docs/FinancialStatementsReportsApi.md#systemgeneratefinancialstatementreport) | **GET** /internal/financial-statements/report | Generate financial statement report for system use
*HealthApi* | [**error**](docs/HealthApi.md#error) | **GET** /error | Gera um erro de teste.
*HealthApi* | [**health**](docs/HealthApi.md#health) | **GET** / | Verifica o status do serviço.
*HealthApi* | [**healthPost**](docs/HealthApi.md#healthpost) | **POST** / | Verifica o status do serviço.
*OrganizationBalanceApi* | [**getOrganizationBalanceHistoryPerAccount**](docs/OrganizationBalanceApi.md#getorganizationbalancehistoryperaccount) | **GET** /external/organization-balance/per-account/history | Get organization balance history per account
*OrganizationBalanceApi* | [**getOrganizationBalancePerAccount**](docs/OrganizationBalanceApi.md#getorganizationbalanceperaccount) | **GET** /external/organization-balance/per-account | Get organization balance per account
*OrganizationBalanceApi* | [**getOrganizationTotalBalance**](docs/OrganizationBalanceApi.md#getorganizationtotalbalance) | **GET** /external/organization-balance/total | Get organization total balance


### Models

- [AggregatedFinancialRecordsReportEntity](docs/AggregatedFinancialRecordsReportEntity.md)
- [AggregatedFinancialRecordsReportEntityData](docs/AggregatedFinancialRecordsReportEntityData.md)
- [AggregatedFinancialRecordsReportEntityDataDataInner](docs/AggregatedFinancialRecordsReportEntityDataDataInner.md)
- [AggregatedFinancialRecordsReportEntityDataFilters](docs/AggregatedFinancialRecordsReportEntityDataFilters.md)
- [BankAccountsDashboardReportEntity](docs/BankAccountsDashboardReportEntity.md)
- [BankAccountsDashboardReportEntityData](docs/BankAccountsDashboardReportEntityData.md)
- [BankAccountsDashboardReportEntityDataBankAccountsInner](docs/BankAccountsDashboardReportEntityDataBankAccountsInner.md)
- [CacheGetResponseDto](docs/CacheGetResponseDto.md)
- [CacheSetDto](docs/CacheSetDto.md)
- [CashFlowReportEntity](docs/CashFlowReportEntity.md)
- [CashFlowReportEntityData](docs/CashFlowReportEntityData.md)
- [CashFlowReportEntityDataDataInner](docs/CashFlowReportEntityDataDataInner.md)
- [CashFlowReportEntityDataDataInnerInsertedAccountsInner](docs/CashFlowReportEntityDataDataInnerInsertedAccountsInner.md)
- [CashFlowReportEntityDataDataInnerPeriod](docs/CashFlowReportEntityDataDataInnerPeriod.md)
- [CashFlowReportEntityDataFilters](docs/CashFlowReportEntityDataFilters.md)
- [CashFlowReportEntityDataFiltersPeriod](docs/CashFlowReportEntityDataFiltersPeriod.md)
- [CashFlowReportEntityDataSummary](docs/CashFlowReportEntityDataSummary.md)
- [CurrentMonthCashFlowEntity](docs/CurrentMonthCashFlowEntity.md)
- [ExceptionResponseEntity](docs/ExceptionResponseEntity.md)
- [ExceptionResponseEntityErrorsInner](docs/ExceptionResponseEntityErrorsInner.md)
- [FinancialMeasuresReportEntity](docs/FinancialMeasuresReportEntity.md)
- [FinancialMeasuresReportEntityData](docs/FinancialMeasuresReportEntityData.md)
- [FinancialMeasuresReportEntityDataData](docs/FinancialMeasuresReportEntityDataData.md)
- [FinancialRecordsAggregatedResultReportEntity](docs/FinancialRecordsAggregatedResultReportEntity.md)
- [FinancialRecordsAggregatedResultReportEntityData](docs/FinancialRecordsAggregatedResultReportEntityData.md)
- [FinancialResultCompositionReportEntity](docs/FinancialResultCompositionReportEntity.md)
- [FinancialResultCompositionReportEntityData](docs/FinancialResultCompositionReportEntityData.md)
- [FinancialResultCompositionReportEntityDataDataInner](docs/FinancialResultCompositionReportEntityDataDataInner.md)
- [FinancialStatementReportEntity](docs/FinancialStatementReportEntity.md)
- [FinancialStatementReportEntityData](docs/FinancialStatementReportEntityData.md)
- [FinancialStatementReportEntityDataDataInner](docs/FinancialStatementReportEntityDataDataInner.md)
- [FinancialStatementReportEntityDataDataInnerContributionMargin](docs/FinancialStatementReportEntityDataDataInnerContributionMargin.md)
- [FinancialStatementReportEntityDataDataInnerOperationalRevenue](docs/FinancialStatementReportEntityDataDataInnerOperationalRevenue.md)
- [FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner](docs/FinancialStatementReportEntityDataDataInnerOperationalRevenueSubcategoriesInner.md)
- [FinancialStatementReportEntityDataDataInnerPeriod](docs/FinancialStatementReportEntityDataDataInnerPeriod.md)
- [FinancialStatementReportEntityDataFilters](docs/FinancialStatementReportEntityDataFilters.md)
- [HealthResponseDto](docs/HealthResponseDto.md)
- [MonthlyFinancialReportEntity](docs/MonthlyFinancialReportEntity.md)
- [MonthlyFinancialReportEntityData](docs/MonthlyFinancialReportEntityData.md)
- [MonthlyFinancialReportEntityDataData](docs/MonthlyFinancialReportEntityDataData.md)
- [MonthlyFinancialReportEntityDataDataItemsInner](docs/MonthlyFinancialReportEntityDataDataItemsInner.md)
- [MonthlyFinancialReportEntityDataFilters](docs/MonthlyFinancialReportEntityDataFilters.md)
- [OrganizationBalanceHistoryPerAccountEntity](docs/OrganizationBalanceHistoryPerAccountEntity.md)
- [OrganizationBalanceHistoryPerAccountEntityHistoryInner](docs/OrganizationBalanceHistoryPerAccountEntityHistoryInner.md)
- [OrganizationBalancePerAccountEntity](docs/OrganizationBalancePerAccountEntity.md)
- [ProjectedCashFlowEntity](docs/ProjectedCashFlowEntity.md)
- [ProjectedCashFlowEntityPeriodsInner](docs/ProjectedCashFlowEntityPeriodsInner.md)
- [ProjectedCashFlowEntityPeriodsInnerPeriod](docs/ProjectedCashFlowEntityPeriodsInnerPeriod.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `2.0.0`
- Package version: `2.0.0`
- Generator version: `7.17.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
