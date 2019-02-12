#### CommonJS的模块实现原理

当我们编写JavaScript代码时，我们可以申明全局变量：
```
var a = 'global';
```
但是在浏览器中，大量使用全局变量可不好。试想一下，如果你在a.js中使用了全局变量s，那么，在b.js中也使用全局变量s，将造成冲突，b.js中对s赋值会改变a.js的运行逻辑。

也就是说，JavaScript语言本身并没有一种模块机制来保证不同模块可以使用相同的变量名。

那Node.js是如何实现这一点的？

其实要实现“模块”这个功能，并不需要语法层面的支持。Node.js也并不会增加任何JavaScript语法。实现“模块”功能的奥妙就在于JavaScript是一种函数式编程语言，它支持闭包。如果我们把一段JavaScript代码用一个函数包装起来，这段代码的所有“全局”变量就变成了函数内部的局部变量。

请注意我们编写的hello.js代码是这样的：
```
'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
```
Node.js加载了hello.js后，它可以把代码包装一下，变成这样执行：
```
(function() {
    'use strict';
    
    var s = 'Hello';
    
    function greet(name) {
        console.log(s + ', ' + name + '!');
    }
    
    module.exports = greet;
})();
```
这样一来，原来的全局变量s现在变成了匿名函数内部的局部变量。如果Node.js继续加载其他模块，这些模块中定义的“全局”变量s也互不干扰。

再来看一下`module.exports`的实现，Node可以先准备一个对象`module`:
```
// 准备module对象:
var module = {
    id: 'hello',
    exports: {}
};
var load = function (module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    module.exports = greet;
    // hello.js代码结束
    return module.exports;
};
var exported = load(module);
// 保存module:
save(module, exported);
```
通过把参数`module`传递给load()函数，`hello.js`就顺利地把一个变量传递给了Node执行环境，Node会把`module`变量保存到某个地方。

由于Node保存了所有导入的module，当我们用require()获取module时，Node找到对应的module，把这个module的exports变量返回，这样，另一个模块就顺利拿到了模块的输出：

```
var greet = require('./hello');
```