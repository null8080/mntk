var $X = function() {
  var $XF = function() {
    return this._$X._cli.apply(this._$X, arguments);
  };
  if (!this._$X) {
    this._$X = {
      author: 'MrNull.io',
      v: 'v1.0',
      _f: [],
      _cli: function(a, b, c) {
        var T = this,
          A = arguments;
        if (typeof a == 'function' && !b && !c) {
          T._f.push(a);
        } else {
          var R;
          T._f.forEach(function(_f) {
            let r = _f.apply(T, A);
            if (typeof r !== 'undefined') R = r;
          });
          return R;
        }
      }
    };
    for (var x1 in this._$X) {
      var Xx = this._$X[x1];
      if (typeof Xx == 'function') $XF[x1] = this._$X[x1].bind(this._$X);
    }
  }
  for (var x2 in this._$X) {
    if (typeof this._$X[x2] == 'function') this._$X[x2].bind(this._$X);
  }
  return $XF;
};


// Export
if (typeof window == 'object') window.$X = $X;
else if (typeof module !== 'undefined') module.exports = $X;