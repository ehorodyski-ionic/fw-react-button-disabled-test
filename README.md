# How to Reproduce

1. Run `npm i`.
2. Run `npm run test`.

Observe the failed test with output:

```
Received element is not disabled:
      <ion-button fill="clear" role="submit" />
```

# Expectation

`disabled` prop should be rendered and set to true.
