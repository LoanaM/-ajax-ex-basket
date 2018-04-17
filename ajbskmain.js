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
  //calcolo la percentuale
  var a = players[y].twoPoints
  var b = players[y].threePoints
  var duepuntiperc = (a*100)/(a+b)
  var trepuntiperc = (b*100)/(a+b)
  //inserisco i valori del giocatore nella scheda
  $('#punti').text(players[y].points)
  $('#2pt').text(duepuntiperc)
  $('#3pt').text(trepuntiperc)
  $('#rimbalzi').text(players[y].rebounds)
  $('#falli').text(players[y].fouls)
})
