
# OrganizationBalanceHistoryPerAccountEntity


## Properties

Name | Type
------------ | -------------
`accountId` | string
`accountName` | string
`accountType` | string
`accountImageUrl` | string
`connectionType` | string
`currentBalance` | string
`history` | [Array&lt;OrganizationBalanceHistoryPerAccountEntityHistoryInner&gt;](OrganizationBalanceHistoryPerAccountEntityHistoryInner.md)

## Example

```typescript
import type { OrganizationBalanceHistoryPerAccountEntity } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "accountId": null,
  "accountName": null,
  "accountType": null,
  "accountImageUrl": null,
  "connectionType": null,
  "currentBalance": null,
  "history": null,
} satisfies OrganizationBalanceHistoryPerAccountEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationBalanceHistoryPerAccountEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


