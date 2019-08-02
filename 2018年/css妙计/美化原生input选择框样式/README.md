### 改变input选择框的样式
![效果预览](https://raw.githubusercontent.com/Zhouxingzu/my-index/master/2018%E5%B9%B4/css%E5%A6%99%E8%AE%A1/%E7%BE%8E%E5%8C%96%E5%8E%9F%E7%94%9Finput%E9%80%89%E6%8B%A9%E6%A1%86%E6%A0%B7%E5%BC%8F/imgs/demo.png)

有时候需要美化input选择框的样式，但是原生的并不支持，所以分享一个比较好的实现方法。

HTML代码
```
<div class="content">
    <label class="mes-select">
        <input class="input-mes-select" type="checkbox" value="1"/>
        <span></span>
        请选择
    </label>
    <br>
    <label class="mes-select">
        <input class="input-mes-select" type="checkbox" value="2"/>
        <span></span>
        请选择
    </label>
</div>
```

CSS代码
```
.mes-select{
    cursor: pointer;
}
.input-mes-select{
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    display: none;
}
.input-mes-select+span{
    position: relative;
    top: 2px;
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url('./imgs/select.png') center no-repeat;
}
.input-mes-select:checked+span{
    background: url('./imgs/checked.png') center no-repeat;
}
```