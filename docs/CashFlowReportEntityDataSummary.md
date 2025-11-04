
# CashFlowReportEntityDataSummary


## Properties

Name | Type
------------ | -------------
`totalPeriods` | number
`overallStartBalance` | number
`overallEndBalance` | number
`totalIncome` | number
`totalOutcome` | number
`netCashFlow` | number

## Example

```typescript
import type { CashFlowReportEntityDataSummary } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "totalPeriods": null,
  "overallStartBalance": null,
  "overallEndBalance": null,
  "totalIncome": null,
  "totalOutcome": null,
  "netCashFlow": null,
} satisfies CashFlowReportEntityDataSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashFlowReportEntityDataSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


