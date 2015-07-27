import xtype from 'xtypejs'
xtype.options.setNameScheme('compact')

export let ensureNewDb = (dbName) => {
  r.branch(
    r.dbList().contains(dbName),
    r.branch(
      r.dbDrop(dbName),
      r.dbCreate(dbName),
      false
    ),
    r.dbCreate(dbName)
  )
  return r.db(dbName)
}

export let ensureDb = (dbName) => {
  return r.branch(
    r.dbList().contains(dbName),
    true,
    r.dbCreate(dbName)
  )
}

export let ensureTable = (tableName) => {
}

export let ensureIndex = (indexName) => {
}
