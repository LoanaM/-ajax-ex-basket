players = []

$('#submit').click(function(){
 var k = $('#numberequest').val()
 for (i = 0; i < k; i++) {
   var s = 0
    $.ajax ({
      url: 'https://www.boolean.careers/api/array/basket?n=1',
      method: "GET",
      success: function(data) {
        players.push(data.response[0])
        console.log(players)
        codice = data.response[0].playerCode
        $('#play'+s).attr('placeholder',codice)
        s++
      },
      error: function(){
        alert('error');
      }
    });

 }

})

$(document).on('click','.giocatori',function(){
  var y = $(this).attr('num')
  $('#punti').text(players[y].points)
  $('#2pt').text(players[y].twoPoints)
  $('#3pt').text(players[y].threePoints)
  $('#rimbalzi').text(players[y].rebounds)
  $('#falli').text(players[y].fouls)
})
