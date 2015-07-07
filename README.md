rethink ensure
==============

```javascript
var r = require(‘rethinkdbdash’)()
var ensure = require(‘rethinkdb-ensure’)(r)

ensure.db(‘ensure’)
ensure.table(‘ensure’, ‘table’)
ensure.index(‘ensure’, ‘table’, ‘index’)
```
