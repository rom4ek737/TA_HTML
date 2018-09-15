var i;
var j;
var bool = true;
  function resolve() {
    for (i = 2; i <= 20; i ++) {
      for (j = 2; j < i; j ++) {
       if (i % j === 0) {
         bool = false;
         break;
       }  
      }
      if (bool) {
        console.log(i);
      }
      else bool = true;
    }
  }

resolve();