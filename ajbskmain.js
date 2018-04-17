players = []

$('#submit').click(function(){
 var k = $('#numberequest').val()
 for (var i = 0; i < k; i++) {


    $.ajax ({
      url: 'https://www.boolean.careers/api/array/basket?n=1',
      method: "GET",
      success: function(data) {

        players.push(data.response[0])
        // codice = data.response[0].playerCode;
        // $('#play'+ i).attr('placeholder',codice);
        // puntiplay1 = data.response[0].points
        console.log(data.response)
        console.log(players)
      },
      error: function(){
        alert('error');
      }
    });

 }
})

$(document).on('click','#play0',function(){
  var y = $(this).attr('num')
  $('#punti').text(players[y].points)
})
