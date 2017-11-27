$(document).ready(function() {
	$('#brain_button').click(function{
		alert('hello');
	});
});

function show_kindness() {
	var rand_no = Math.floor((Math.random() * 10) +1);
	$(kindness_name.[rand_no]).show();
};

var kindness_name = [
'Call a friend',
'Leave surprise in the library'
];

var kindness_description = [
'Calling a friend will help to relieve stress',
'Leaving a surprise is a nice thing to do'
]
