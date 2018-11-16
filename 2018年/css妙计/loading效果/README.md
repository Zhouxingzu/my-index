效果预览如下：

![效果预览](https://github.com/Zhouxingzu/my-index/blob/master/2018%E5%B9%B4/css%E5%A6%99%E8%AE%A1/loading%E6%95%88%E6%9E%9C/imgs/yulan.gif?raw=true)

样式代码如下：
```
.loading{
    position: relative;
    color: transparent !important;
    pointer-events: none;
}
.loading:after{
    position: absolute;
    left: 50%;
    top: 50%;
    animation: spinAround 500ms infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    width: 1em;
    margin-left: -0.5em;
    margin-top: -0.5em;
}
```
只需要在对应的元素上加上 `loading` 这个class名就可以了