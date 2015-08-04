'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Ensure = (function () {
  function Ensure(r) {
    _classCallCheck(this, Ensure);

    this.r = r;
  }

  _createClass(Ensure, [{
    key: 'db',
    value: function db(dbName, isNew) {
      isNew = isNew || false;
      return this.r.branch(isNew, this.r.branch(this.r.dbList().contains(dbName), this.r.branch(this.r.dbDrop(dbName), this.r.dbCreate(dbName), false), this.r.dbCreate(dbName)), this.r.branch(this.r.dbList().contains(dbName), false, this.r.dbCreate(dbName)));
    }
  }, {
    key: 'table',
    value: function table(dbName, tableName, isNew) {
      var _this = this;

      isNew = isNew || false;
      return this.r.branch(isNew, this.r.branch(this.r.db(dbName).tableList().contains(tableName), this.r.db(dbName).tableDrop(tableName)['do'](function () {
        return _this.r.db(dbName).tableCreate(tableName);
      }), this.r.db(dbName).tableCreate(tableName)), this.r.branch(this.r.db(dbName).tableList().contains(tableName), true, this.r.db(dbName).tableCreate(tableName)));
    }
  }, {
    key: 'index',
    value: function index(dbName, tableName, indexName) {
      var _this2 = this;

      return this.r.branch(this.r.db(dbName).table(tableName).indexList().contains(indexName), this.r.db(dbName).table(tableName).indexWait(indexName), this.r.branch(this.r.db(dbName).table(tableName).info()('primary_key').eq(indexName), this.r.db(dbName).table(tableName).indexWait(indexName), this.r.db(dbName).table(tableName).indexCreate(indexName)['do'](function () {
        return _this2.r.db(dbName).table(tableName).indexWait(indexName);
      })));
    }
  }]);

  return Ensure;
})();

exports['default'] = Ensure;
module.exports = exports['default'];