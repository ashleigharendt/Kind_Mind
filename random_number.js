$(document).ready(function() {
	$('p').hide();
	$('#brain_button').click(show_kindness);
});

function show_kindness() {
	var rand_no = Math.floor((Math.random() * 2));
	$(kindnesses[rand_no]['short']).show();
};

var kindnesses = [
	{'short': '#Call_Friend',
     'long': '#Call_Friend_Long',
     'short':'#Book',
     'long':'#Book_Long'}
];
