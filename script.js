var defaultText = 'try me'

var operations = {
	'add' : '+',
	'subtract' : '-',
	'multiply' : '*',
	'divide' : '/',
	'open' : '(',
	'close' : ')',
	'decimal' : '.'
}

function display(x) {
	var current = $('#display').text();

	if (current == defaultText) {
		$('#display').text(x);
	} else {
		$('#display').text(current += x);
	}
}

function equals(str) {

	try {
		var result = eval(str);
		$('#display').text(result);

	}
	catch(error) {
		$('#display').html(str + "<br>that doesn't make sense! ('ac' to reset)");
	}

	

}

function input(id) {

	if (id === 'ac') {
		$('#display').text(defaultText)
	} else if (!isNaN(id)) {
		display(id);
	} else if (operations.hasOwnProperty(id)) {
		display(operations[id])
	} else if (id === 'delete') {
		var current = $('#display').text();

		if (current.length <= 1) {
			$('#display').text(defaultText);
		} else if (current !== defaultText) {
			$('#display').text(current.substr(0, current.length - 1));
		}
	} else if (id === 'equals') {
		equals($('#display').text());
	}	
}

$(document).ready(function(){
	$('#display').text(defaultText);

	$('.button').click(function(){
		var id = $(this).attr('id')
		input(id);
	});

});