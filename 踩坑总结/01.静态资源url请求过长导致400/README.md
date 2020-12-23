在一次开发中偶然遇到一个问题，因为我们的静态资源都是会合并打包的，如果资源很多，在浏览器中引用的时候可能会是这个样子：
```
https://as.zbjimg.com/static/nodejs-ipr-mysipo-web/components/Echarts-util/map/??11.973cb104.js,12.2f5ac41f.js,13.4a4fa32a.js,14.8a366a83.js,15.f58dc14c.js,21.45a2cf85.js,22.4a5cddb8.js,23.82e236cc.js......
```
但是我发现当一个资源url字段过长时，会直接报404。查询了相关资料后发现url的长度是受到限制的，一是服务器端的限制，二就是游览器端的限制。

所以解决方法是拆分资源合并，不要把很多资源合在一起。