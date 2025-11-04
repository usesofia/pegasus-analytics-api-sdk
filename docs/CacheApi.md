# CacheApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCacheValue**](CacheApi.md#getcachevalue) | **GET** /external/cache | Get string value from cache |
| [**setCacheValue**](CacheApi.md#setcachevalue) | **PUT** /external/cache | Set string value in cache with 10-second TTL |



## getCacheValue

> CacheGetResponseDto getCacheValue()

Get string value from cache

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { GetCacheValueRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new CacheApi();

  try {
    const data = await api.getCacheValue();
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

[**CacheGetResponseDto**](CacheGetResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns the cached string value or null if not found/expired |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## setCacheValue

> setCacheValue(cacheSetDto)

Set string value in cache with 10-second TTL

### Example

```ts
import {
  Configuration,
  CacheApi,
} from '@usesofia/pegasus-analytics-api-sdk';
import type { SetCacheValueRequest } from '@usesofia/pegasus-analytics-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-analytics-api-sdk SDK...");
  const api = new CacheApi();

  const body = {
    // CacheSetDto
    cacheSetDto: ...,
  } satisfies SetCacheValueRequest;

  try {
    const data = await api.setCacheValue(body);
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
| **cacheSetDto** | [CacheSetDto](CacheSetDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully set value in cache |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

