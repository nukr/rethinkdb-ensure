import xtype from 'xtypejs'
xtype.options.setNameScheme('compact')

export default class Ensure {
  constructor (r) {
    this.r = r
  }

  async db (dbName) {
    if (xtype.is(dbName, 'str')) {
      let dbList = await this.r.dbList()
      if (dbList.indexOf(dbName) === -1) {
        return await this.r.dbCreate(dbName)
      } else {
        return 'exists'
      }
    } else {
      throw Error('arguments length error')
    }
  }

  async table (dbName, tableName) {
    if (tableName) {
      let tableList = await this.r.db(dbName).tableList()
      if (tableList.indexOf(tableName) === -1) {
        return await this.r.db(dbName).tableCreate(tableName)
      } else {
        return 'exists'
      }
    } else {
      throw Error('arguments length error')
    }
  }

  async index (dbName, tableName, indexName) {
    if (indexName) {
      let indexList = await this.r.db(dbName).table(tableName).indexList()
      if (indexList.indexOf(indexName) === -1) {
        let create = await this.r.db(dbName).table(tableName).indexCreate(indexName)
        await this.r.db(dbName).table(tableName).indexWait(indexName)
        return create
      } else {
        return 'exists'
      }
    } else {
      throw Error('arguments length error')
    }
  }
}
