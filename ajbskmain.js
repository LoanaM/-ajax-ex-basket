$('#submit').click(function(){

    $.ajax ({
      url: 'https://www.boolean.careers/api/array/basket?n=1',
      method: "GET",
      success: function(data) {
        codice = data.response[0].playerCode;
        $('#play1').attr('placeholder',codice);
        puntiplay1 = data.response[0].points
        console.log(data.response)
      },
      error: function(){
        alert('error');
      }
    });

})

$(document).on('click','#play1',function(){

  $('#punti').text(puntiplay1)
})
