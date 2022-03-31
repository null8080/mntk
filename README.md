# Mr Null's Toolkit
Just the way I like to build things.




# Usage
The core constructor is called "$X", because I'm bad at naming things.
MNTK, NTK & Toolkit were other names I decided not to use because I have crippling ADHD.
So I settled on "$X" because it is unassuming, short and looks cooler anyway.


## Browser
```html
<script type="application/javascript" src="mntk.js"></script>
<script>
var $ = new $X(); 
// ...
</script> 
```


## Server
```javascript
// npm install mntk
var $X = require('mntk');
$ = new $X();
// ...
```


# OMNI Function
The OMNI function is a good 93.6% of the reason this exists, so worth noting how that comes together.

## Adding a Handler.
To add a handler to the omni function, we use the omni function, because i don't see why we shouldn't.



```javascript

// We create a handler that does some math.
$(function DoSomeMath(OP, N1, N2){
    
    // We'll want to make sure the arguments fit the function, else we ignore this.
    var Operations = ['+','-','/','*'];
    if (
        typeof N1 == 'number' 
     && typeof N2 == 'number'
     && typeof OP == 'string'
     && Operations.includes(OP)
    ) {
        
        // I don't use switches because it takes longer to write and looks like garbage.
        var R;
        if (OP=='+') R = N1+N2;
        if (OP=='-') R = N1-N2;
        if (OP=='/') R = N1/N2;
        if (OP=='*') R = N1*N2; 
        return R;
    }
    
});


// We create a second handler that queries the dom. 

$(function QueryTheDOM(a,b,c){

    // Ensure the only argument is a string.
    // Guess there could be a 4th and 5th argument,
    // but whatever idc.
    
    if (typeof a == 'string' && !b && !c) {

        // This doesn't check for tags, but i don't feel like writing code for that right now.
        // You can though. I believe in you :-)
        if (/^(\#|\.|head|body)/.test(a)) return document.querySelectorAll(a);
        
    }
  
});


// Cool. Now let's use them both at once.
$('body')[0].innerHTML = $('*', 5, 10);

// The <body> should now have '50' written in it. 
// Worth noting this *might* not work unless you run it in a browser.
// Feel free to try it anyway with your finger's crossed.
```

