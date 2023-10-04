Parts of a context (with typescript):

- Type of the state
- Provider
- data / methods

## Web Request Mob Programming

do not use the async and await keywords outside of the service files. Perform async functions with `.then()` and `.catch()`

1. web requests with fetch
   1. click a button to store data on the api
   2. click a button to retrieve data on the api
2. web requests with axios
   1. click a button to store
   2. click a button to retrieve
3. wire up new input component
   1. save stores input in api
   2. displayText data is loaded from api
4. Harden web requests
   1. when a request is in flight show the spinner
   2. when web request results in an error, show error text
   3. prevent double clicks of the submit button