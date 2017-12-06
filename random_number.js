$(document).ready(function() {
	$('#brain_button').click(show_kindness);
	$('#smile').hide();
    $('#new_kindness').click(show_kindness);
    $('#tell_more').hide();
    $('#new_kindness').hide();
    $('#tell_more').click(tell_more);
});


function show_kindness() {
	var rand_no = Math.floor((Math.random() * 15));	
    $('.RAK_Short').hide();
    $(kindnesses[rand_no]['short']).show();
    $('#store_random').data('last-random', rand_no);
    var id = this.id;
    if (id ==('brain_button')) {
        $('#brain_button').hide();
        $('#wobble').hide();
        $('#smile').show();
        $('#tell_more').show();
        $('#new_kindness').show();
    }
    else {
        $('.RAK_Long').hide();
    }
    };

function tell_more() {
    var rand_no = $('#store_random').data('last-random');
    $(kindnesses[rand_no]['long']).show();
    $(window).scrollTop($('.RAK_Long').offset().top);
};
    
var kindnesses = [
	{'short':'#Call_Friend',
     'long':'#Call_Friend_Long'},
     {'short':'#Book',
     'long':'#Book_Long'},
 	 {'short':'#Dinner',
 	 'long':'#Dinner_Long'},
 	 {'short':'#Stamps',
     'long':'#Stamps_Long'},
     {'short':'#Recycle',
     'long':'#Recycle_Long'},
 	 {'short':'#Postit',
     'long':'#Postit_Long'},
 	 {'short':'#Change',
     'long':'#Change_Long'},
 	 {'short':'#Queue',
     'long':'#Queue_Long'},
 	 {'short':'#Meal',
     'long':'#Meal_Long'},
 	 {'short':'#Conversation',
     'long':'#Conversation_Long'},
 	 {'short':'#Compliment',
     'long':'#Compliment_Long'},
 	 {'short':'#Smile',
     'long':'#Smile_Long'},
  	 {'short':'#Playlist',
     'long':'#Playlist_Long'},
 	 {'short':'#Letter',
     'long':'#Letter_Long'},
  	 {'short':'#Homeless',
     'long':'#Homeless_Long'}
     ];
    


