# hana-client-test

Instantiate a HANA client and executes a simple SELECT statement.

To reproduce:
- `npm install`
- replace empty values in conn_params within `script.js` by actual HANA connection parameters
- `npm run start` <- this will execute the `SELECT ...` statement and redirect logs to logs.txt