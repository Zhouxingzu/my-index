在javascript OOP中，我们经常会这样定义：     
```
function cat(){
	
}
cat.prototype={     
	food:"fish",     
	say: function(){
		alert("I love "+this.food);     
	}
}
var blackCat = new cat;
blackCat.say(); 
```

但是如果我们有一个对象`whiteDog={food:"bone"}`,我们不想对它重新定义say方法，那么我们可以通过call或apply用blackCat的say方法：blackCat.say.call(whiteDog);所以，可以看出call和apply是为了动态改变this而出现的，当一个object没有某个方法，但是其他的有，我们可以借助call或apply用其它对象的方法来操作。

> 简化记忆法：
```
有天狗想吃鱼了

猫.吃鱼.call(狗，鱼)

狗就吃到鱼了
```

call和apply两者的作用方式相同，它们的区别在于接收参数的方式不同，对于call而言，第一个参数this与apply()相同，其他的参数必须直接传给函数，要一个一个的列出来。而对apply于来说，apply()可以接收一个数组或arguments对象。


#### 用js实现call的方法：
```
var a = {
	name: 'zhouxingzu'
}

function test(age){
	console.log('我的名字：' + this.name);
	console.log('我的年龄：' + this.age);
}

Function.prototype.call1 = function(target){
	let args = [];
	target.fn = this;
	for(let i = 1; i < arguments.length; i++){
		args.push(arguments[i]);
	}
	target.fn(args.join(','));
	delete target.fn;
}

test.call1(a, 22);
```