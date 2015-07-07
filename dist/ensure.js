'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _xtypejs = require('xtypejs');

var _xtypejs2 = _interopRequireDefault(_xtypejs);

_xtypejs2['default'].options.setNameScheme('compact');

var Ensure = (function () {
  function Ensure(r) {
    _classCallCheck(this, Ensure);

    this.r = r;
  }

  _createClass(Ensure, [{
    key: 'db',
    value: function db(dbName) {
      var dbList;
      return regeneratorRuntime.async(function db$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!_xtypejs2['default'].is(dbName, 'str')) {
              context$2$0.next = 13;
              break;
            }

            context$2$0.next = 3;
            return regeneratorRuntime.awrap(this.r.dbList());

          case 3:
            dbList = context$2$0.sent;

            if (!(dbList.indexOf(dbName) === -1)) {
              context$2$0.next = 10;
              break;
            }

            context$2$0.next = 7;
            return regeneratorRuntime.awrap(this.r.dbCreate(dbName));

          case 7:
            return context$2$0.abrupt('return', context$2$0.sent);

          case 10:
            return context$2$0.abrupt('return', 'exists');

          case 11:
            context$2$0.next = 14;
            break;

          case 13:
            throw Error('arguments length error');

          case 14:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'table',
    value: function table(dbName, tableName) {
      var tableList;
      return regeneratorRuntime.async(function table$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!tableName) {
              context$2$0.next = 13;
              break;
            }

            context$2$0.next = 3;
            return regeneratorRuntime.awrap(this.r.db(dbName).tableList());

          case 3:
            tableList = context$2$0.sent;

            if (!(tableList.indexOf(tableName) === -1)) {
              context$2$0.next = 10;
              break;
            }

            context$2$0.next = 7;
            return regeneratorRuntime.awrap(this.r.db(dbName).tableCreate(tableName));

          case 7:
            return context$2$0.abrupt('return', context$2$0.sent);

          case 10:
            return context$2$0.abrupt('return', 'exists');

          case 11:
            context$2$0.next = 14;
            break;

          case 13:
            throw Error('arguments length error');

          case 14:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }, {
    key: 'index',
    value: function index(dbName, tableName, indexName) {
      var indexList, create;
      return regeneratorRuntime.async(function index$(context$2$0) {
        while (1) switch (context$2$0.prev = context$2$0.next) {
          case 0:
            if (!indexName) {
              context$2$0.next = 16;
              break;
            }

            context$2$0.next = 3;
            return regeneratorRuntime.awrap(this.r.db(dbName).table(tableName).indexList());

          case 3:
            indexList = context$2$0.sent;

            if (!(indexList.indexOf(indexName) === -1)) {
              context$2$0.next = 13;
              break;
            }

            context$2$0.next = 7;
            return regeneratorRuntime.awrap(this.r.db(dbName).table(tableName).indexCreate(indexName));

          case 7:
            create = context$2$0.sent;
            context$2$0.next = 10;
            return regeneratorRuntime.awrap(this.r.db(dbName).table(tableName).indexWait(indexName));

          case 10:
            return context$2$0.abrupt('return', create);

          case 13:
            return context$2$0.abrupt('return', 'exists');

          case 14:
            context$2$0.next = 17;
            break;

          case 16:
            throw Error('arguments length error');

          case 17:
          case 'end':
            return context$2$0.stop();
        }
      }, null, this);
    }
  }]);

  return Ensure;
})();

exports['default'] = Ensure;
module.exports = exports['default'];