# FiltersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createFilter**](FiltersApi.md#createfilter) | **POST** /external/filters | Cria um novo filtro. |
| [**findByIdFilter**](FiltersApi.md#findbyidfilter) | **GET** /external/filters/{id} | Busca um filtro pelo identificador. |



## createFilter

> FilterResponseDto createFilter(createFilterRequestDto)

Cria um novo filtro.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { CreateFilterRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FiltersApi();

  const body = {
    // CreateFilterRequestDto
    createFilterRequestDto: ...,
  } satisfies CreateFilterRequest;

  try {
    const data = await api.createFilter(body);
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
| **createFilterRequestDto** | [CreateFilterRequestDto](CreateFilterRequestDto.md) |  | |

### Return type

[**FilterResponseDto**](FilterResponseDto.md)

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


## findByIdFilter

> FilterResponseDto findByIdFilter(id)

Busca um filtro pelo identificador.

### Example

```ts
import {
  Configuration,
  FiltersApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { FindByIdFilterRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new FiltersApi();

  const body = {
    // string | Identificador do filtro.
    id: id_example,
  } satisfies FindByIdFilterRequest;

  try {
    const data = await api.findByIdFilter(body);
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
| **id** | `string` | Identificador do filtro. | [Defaults to `undefined`] |

### Return type

[**FilterResponseDto**](FilterResponseDto.md)

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

