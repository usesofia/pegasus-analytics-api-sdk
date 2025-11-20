
# QueryResponseDto


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`data` | { [key: string]: string; }
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { QueryResponseDto } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "data": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies QueryResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QueryResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


