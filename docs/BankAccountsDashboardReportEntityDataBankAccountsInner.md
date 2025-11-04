
# BankAccountsDashboardReportEntityDataBankAccountsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`type` | string
`provider` | string
`recordCount` | number
`totalIncome` | string
`totalOutcome` | string
`balance` | string

## Example

```typescript
import type { BankAccountsDashboardReportEntityDataBankAccountsInner } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "provider": null,
  "recordCount": null,
  "totalIncome": null,
  "totalOutcome": null,
  "balance": null,
} satisfies BankAccountsDashboardReportEntityDataBankAccountsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankAccountsDashboardReportEntityDataBankAccountsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


