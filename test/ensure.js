import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import rethinkdbdash from 'rethinkdbdash'
import Ensure from '../src/ensure'
import uuid from 'node-uuid'
import config from '../config'

let r = rethinkdbdash(config.rethinkdb)
let ensure = new Ensure(r)
let dbName = uuid.v4().replace(/-/g, '_')

chai.use(chaiAsPromised)

after(async (done) => {
  console.time('dbDrop')
  await r.dbDrop(dbName)
  console.timeEnd('dbDrop')
  done()
})

describe('ensure', () => {
  it('db create', () => {
    return expect(ensure.db(dbName)).to.eventually.have.property('dbs_created', 1)
  })
  it('table create', () => {
    return expect(ensure.table(dbName, 'test_table')).to.eventually.have.property('tables_created', 1)
  })
  it('index create', () => {
    return expect(ensure.index(dbName, 'test_table', 'createdAt')).to.eventually.have.property('created', 1)
  })
  it('db exists', () => {
    return expect(ensure.db(dbName)).to.eventually.be.equal('exists')
  })
  it('table exists', () => {
    return expect(ensure.table(dbName, 'test_table')).to.eventually.be.equal('exists')
  })
  it('index exists', () => {
    return expect(ensure.table(dbName, 'test_table', 'createdAt')).to.eventually.be.equal('exists')
  })
})
