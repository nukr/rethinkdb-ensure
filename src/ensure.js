export default class Ensure {
  constructor (r) {
    this.r = r
  }

  db (dbName, isNew) {
    isNew = isNew || false
    return this.r.branch(
      isNew,
      this.r.branch(
        this.r.dbList().contains(dbName),
        this.r.branch(this.r.dbDrop(dbName), this.r.dbCreate(dbName), false),
        this.r.dbCreate(dbName)
      ),
      this.r.branch(
        this.r.dbList().contains(dbName),
        false,
        this.r.dbCreate(dbName)
      )
    )
  }

  table (dbName, tableName, isNew) {
    isNew = isNew || false
    return this.r.branch(
      isNew,
      this.r.branch(
        this.r.db(dbName).tableList().contains(tableName),
        this.r.db(dbName).tableDrop(tableName).do(() => {
          return this.r.db(dbName).tableCreate(tableName)
        }),
        this.r.db(dbName).tableCreate(tableName)
      ),
      this.r.branch(
        this.r.db(dbName).tableList().contains(tableName),
        true,
        this.r.db(dbName).tableCreate(tableName)
      )
    )
  }

  index (dbName, tableName, indexName) {
    return this.r.branch(
      this.r.db(dbName).table(tableName).indexList().contains(indexName),
      this.r.db(dbName).table(tableName).indexWait(indexName),
      this.r.branch(
        this.r.db(dbName).table(tableName).info()('primary_key').eq(indexName),
        this.r.db(dbName).table(tableName).indexWait(indexName),
        this.r.db(dbName).table(tableName).indexCreate(indexName).do(() => {
          return this.r.db(dbName).table(tableName).indexWait(indexName)
        })
      )
    )
  }
}
