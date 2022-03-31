(function(){
    
    var _u='undefined',
        _f='function',
        _o='object',
        _c='constructor';
    
    var $X = function() {
    
      var $T = this, $XF = function(a) { 
           var T=this, A=arguments;
          if (A.length == 1 && typeof a==_f) {
              T.__o.f.push(a);
          }
          else {
            var R;
            T.__o.f.forEach(function(C) {
              var r = C.apply(C,A);
              if (typeof r!==_u) R=r;
            });
            return R;
          }
      };
      $T._$X = {
        __v: 'v0.1',
        __o: {f:[]}
      };
      $XF = $XF.bind($T._$X);
      for(var x in $T._$X) {
        if (typeof $T._$X[x]==_f) $XF[x] = $T._$X[x].bind($T._$X);
      }
      return $XF;
    };
    
    var W = (typeof window!==_u?window:0), M = (typeof module!==_u?module:0);
    if (typeof W==_o && typeof W[_c]==_f && W[_c].name=='Window') W.$X = $X;
    else if (typeof M==_o && typeof M[_c]==_f && M[_c].name=='Module') M.exports = $X;
    
})();
