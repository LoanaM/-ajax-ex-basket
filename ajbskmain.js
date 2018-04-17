$('#submit').click(function(){

    $.ajax ({
      url: 'https://www.boolean.careers/api/array/basket?n=1',
      method: "GET",
      success: function(data) {
        codice = data.response[0].playerCode;
        $('#play1').attr('placeholder',codice);
      },
      error: function(){
        alert('error');
      }
    });

})
