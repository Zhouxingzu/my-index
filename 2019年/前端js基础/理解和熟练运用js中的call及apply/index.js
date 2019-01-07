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