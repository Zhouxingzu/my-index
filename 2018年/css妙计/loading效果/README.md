![效果预览](https://raw.githubusercontent.com/Zhouxingzu/zhouxingzu.github.io/master/2018%E5%B9%B4/imgs/3.png)

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