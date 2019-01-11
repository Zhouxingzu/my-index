### 改变input选择框的样式
demo效果预览：[https://zhouxingzu.github.io/ElevatorNav/](https://zhouxingzu.github.io/ElevatorNav/)

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