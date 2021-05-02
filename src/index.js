(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxStubSingleton = nx.stubSingleton || require('@jswork/next-stub-singleton');

  var NxMockStorage = nx.declare('nx.MockStorage', {
    statics: nx.mix(null, nxStubSingleton()),
    methods: {
      _storage: {},
      // basic API
      getItem: function (key) {
        return this._storage[key] || null;
      },
      setItem: function (key, val) {
        this._storage[key] = val;
      },
      removeItem: function (key) {
        delete this._storage[key];
      },
      clear: function () {
        this._storage = {};
      },
      keys: function () {
        var ret = [];
        for (var key in this._storage) {
          if (this._storage.hasOwnProperty(key)) {
            ret.push(key);
          }
        }
        return ret;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxMockStorage;
  }
})();
