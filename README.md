# Basic Usage

```JavaScript
var c = new Mousemover('.mousewrapper', 10);
window.addEventListener('resize', function(e) {
    if(window.innerWidth <= 1000) {
        c.kill();
    } else {
        c.init();
    }
});
```
