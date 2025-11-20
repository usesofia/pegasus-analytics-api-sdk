# QueriesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createQuery**](QueriesApi.md#createquery) | **POST** /external/queries | Cria uma nova query. |
| [**findByIdQuery**](QueriesApi.md#findbyidquery) | **GET** /external/queries/{id} | Busca uma query pelo identificador. |



## createQuery

> QueryResponseDto createQuery(createQueryRequestDto)

Cria uma nova query.

### Example

```ts
import {
  Configuration,
  QueriesApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { CreateQueryRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new QueriesApi();

  const body = {
    // CreateQueryRequestDto
    createQueryRequestDto: ...,
  } satisfies CreateQueryRequest;

  try {
    const data = await api.createQuery(body);
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
| **createQueryRequestDto** | [CreateQueryRequestDto](CreateQueryRequestDto.md) |  | |

### Return type

[**QueryResponseDto**](QueryResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findByIdQuery

> QueryResponseDto findByIdQuery(id)

Busca uma query pelo identificador.

### Example

```ts
import {
  Configuration,
  QueriesApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { FindByIdQueryRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new QueriesApi();

  const body = {
    // string | Identificador da query.
    id: id_example,
  } satisfies FindByIdQueryRequest;

  try {
    const data = await api.findByIdQuery(body);
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
| **id** | `string` | Identificador da query. | [Defaults to `undefined`] |

### Return type

[**QueryResponseDto**](QueryResponseDto.md)

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

