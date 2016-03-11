function pow(){
    var x = prompt('Введите число');
  var n = prompt('Введите степень');
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
alert(pow());
function login(){
	var names = [];
	for (var i = 1; i < 6; i++) {
		var name = prompt('Введите имя ' + i);
		names.push(name);
	}
	var log = prompt('Введите ваше имя');
	for (var i = 0; i < names.length; i++){
		if ( log == names[i] ) {
			alert('Hello ' + names[i]);
			return;
		}
		else if ( log != names[i] && i != names.length-1){
	   		continue;
		}
		else {
			alert('ERROR');
			return;
		}
	} 
}
login();