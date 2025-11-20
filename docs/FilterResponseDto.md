
# FilterResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`userId` | string
`resource` | string
`query` | { [key: string]: string; }
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { FilterResponseDto } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "userId": null,
  "resource": null,
  "query": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies FilterResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FilterResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


