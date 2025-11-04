# OrganizationBalanceApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getOrganizationBalanceHistoryPerAccount**](OrganizationBalanceApi.md#getorganizationbalancehistoryperaccount) | **GET** /external/organization-balance/per-account/history | Get organization balance history per account |
| [**getOrganizationBalancePerAccount**](OrganizationBalanceApi.md#getorganizationbalanceperaccount) | **GET** /external/organization-balance/per-account | Get organization balance per account |
| [**getOrganizationTotalBalance**](OrganizationBalanceApi.md#getorganizationtotalbalance) | **GET** /external/organization-balance/total | Get organization total balance |



## getOrganizationBalanceHistoryPerAccount

> Array&lt;OrganizationBalanceHistoryPerAccountEntity&gt; getOrganizationBalanceHistoryPerAccount(periodAmount, periodType)

Get organization balance history per account

### Example

```ts
import {
  Configuration,
  OrganizationBalanceApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetOrganizationBalanceHistoryPerAccountRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new OrganizationBalanceApi();

  const body = {
    // number | Quantidade de períodos
    periodAmount: 30,
    // 'day' | 'month' | 'year' | Tipo de período
    periodType: periodType_example,
  } satisfies GetOrganizationBalanceHistoryPerAccountRequest;

  try {
    const data = await api.getOrganizationBalanceHistoryPerAccount(body);
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
| **periodAmount** | `number` | Quantidade de períodos | [Defaults to `undefined`] |
| **periodType** | `day`, `month`, `year` | Tipo de período | [Defaults to `undefined`] [Enum: day, month, year] |

### Return type

[**Array&lt;OrganizationBalanceHistoryPerAccountEntity&gt;**](OrganizationBalanceHistoryPerAccountEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Histórico de saldo da organização |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizationBalancePerAccount

> Array&lt;OrganizationBalancePerAccountEntity&gt; getOrganizationBalancePerAccount()

Get organization balance per account

### Example

```ts
import {
  Configuration,
  OrganizationBalanceApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetOrganizationBalancePerAccountRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new OrganizationBalanceApi();

  try {
    const data = await api.getOrganizationBalancePerAccount();
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

[**Array&lt;OrganizationBalancePerAccountEntity&gt;**](OrganizationBalancePerAccountEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Saldo da organização por conta |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getOrganizationTotalBalance

> OrganizationBalancePerAccountEntity getOrganizationTotalBalance()

Get organization total balance

### Example

```ts
import {
  Configuration,
  OrganizationBalanceApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetOrganizationTotalBalanceRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new OrganizationBalanceApi();

  try {
    const data = await api.getOrganizationTotalBalance();
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

[**OrganizationBalancePerAccountEntity**](OrganizationBalancePerAccountEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Saldo da organização |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

