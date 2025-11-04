
# ProjectedCashFlowEntityPeriodsInner


## Properties

Name | Type
------------ | -------------
`period` | [ProjectedCashFlowEntityPeriodsInnerPeriod](ProjectedCashFlowEntityPeriodsInnerPeriod.md)
`openingBalance` | string
`totalIncome` | string
`totalOutcome` | string
`closingBalance` | string
`isProjected` | boolean

## Example

```typescript
import type { ProjectedCashFlowEntityPeriodsInner } from '@usesofia/pegasus-analytics-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "period": null,
  "openingBalance": null,
  "totalIncome": null,
  "totalOutcome": null,
  "closingBalance": null,
  "isProjected": null,
} satisfies ProjectedCashFlowEntityPeriodsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProjectedCashFlowEntityPeriodsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


