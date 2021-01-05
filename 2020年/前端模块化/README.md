## AMD规范
AMD (Asynchronous Module Definition）也是一种 JavaScript模块化规范。从名字上可以看出，它主要提供了异步加载的功能。对于多个JS模块之间的依赖问题，如果使用原生的方式加载代码，随着加载文件的增多，浏览器会长时间地失去响应，而AMD能够保证被依赖的模块尽早地加载到浏览器中，从而提高页面响应速度。RequireJS就是实现了该规范的类库，实际上AMD也是其在推广过程中的产物。

利用RequireJS来编写模块，所有的依赖项必须提前声明好。在导入模块的时候，也会先加载对应的依赖模块，然后再执行接下来的代码，同时AMD模块可以并行加载所有依赖模块，从而很好地提高页面加载性能：
```
define('./index.js',function(code) {
    // code 就是index.js 返回的内容
    return {
        sayHello: function(name) {
            return "Hello, " + name;
        }
    }
});
```

## CMD规范
CMD(Common Module Definition)最初是由阿里的玉伯提出的，同AMD类似，使用CMD模块也需要使用对应的库SeaJS。SeaJS所要解决的问题和requireJS一样，但是在使用方式和加载时机上有所不同：
```
define(function(require) {
 
   //通过require引用模块
 
   var path=require.resolve('./cmdDefine');
 
   alert(path);
 
});
```
CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的。如果使用require.async()方法，可以实现模块的懒加载。

## AMD 和 CMD 区别
* 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。
* CMD 推崇依赖就近，AMD 推崇依赖前置。

## RequireJS 和 sea.js 的区别
* sea.js 只有在 require 的地方，才会真正执行模块。
* RequireJS 会先运行所有的依赖，得到所有的结果后再执行回调。

## CommonJS
这是一种被广泛使用的Javascript模块化规范，大家最熟悉的Node.js应用中就是采用这个规范。在Node.js中，内置了module对象用来定义模块, require函数用来加载模块文件，代码如下：
```
// utils.js 模块定义
module.exports = function(a, b) {
    return a + b;
};
 
// 加载模块
var utils = require('./utils');
console.log(utils(1, 2));
```

## UMD
上面介绍的CommonJS和AMD等模块化方案都是针对特定的平台，如果想要实现跨平台的模块化，就得引入UMD的模块化方式。UMD可以很好地兼容AMD， CommonJS等模块化语法，很多JS框架和类库都会打包成这种形式的代码。

接下来，让我们通过一个简单地例子看一下如何使用和定义UMD模块：
```
(function(root, factory) {
    if (typeof module === 'object' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(['jquery'], factory($));
    } else {
        // Browser globals
        root.ElevatorNav = factory(root.jQuery);
    }
}(this, function(jquery) {
    // 现在你可以利用jquery做你想做的事了
     
}));
```

## ES6 Modules
在ES6中，从语法层面就提供了模块化的功能。然而受限于浏览器的实现程度，如果想要在浏览器中运行，还是需要通过Babel等转译工具进行编译。ES6提供了import和export命令，分别对应模块的导入和导出功能。具体实例如下：
```
// demo.js 模块定义
var name = "scq000";
var sayHello = (name) => {
  console.log("Hi，" + name);
}
export {name, sayHello};
 
// app.js 使用模块
import {sayHello} from "./demo";
sayHello("Zhouxingzu");
```