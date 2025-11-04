
# OrganizationBalancePerAccountEntity


## Properties

Name | Type
------------ | -------------
`accountId` | string
`accountName` | string
`accountType` | string
`connectionType` | string
`accountImageUrl` | string
`currentBalance` | string

## Example

```typescript
import type { OrganizationBalancePerAccountEntity } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "accountId": null,
  "accountName": null,
  "accountType": null,
  "connectionType": null,
  "accountImageUrl": null,
  "currentBalance": null,
} satisfies OrganizationBalancePerAccountEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationBalancePerAccountEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


