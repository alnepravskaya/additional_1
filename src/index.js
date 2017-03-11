module.exports = function sum() {
	var n = 0;
	if(arguments.length==0){
		return n;
	}
	for (var j = 0; j < arguments.length; j++) {
		n = n + arguments[j];
	}
	var fn = function () {
		if (arguments.length == 0) {
			return n;
		}
		for (var i = 0; i < arguments.length; i++) {
			n = n + arguments[i];
		}
		return sum(n);
	};
	return fn;
}
