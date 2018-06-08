var array = [1,2,3,4,5,6,7,8,9,0];

var i,j,k;
for (i = array.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = array[i - 1];
    array[i - 1] = array[j];
    array[j] = k;
}

var randomNumber = array.slice(0,4).toString().replace(",","").replace(",","").replace(",","").replace(",","");

console.log(randomNumber)

function noRepeat(number) {
    return (/([0-9]).*?\1/).test(number)
} 

$('form').on('submit', function(e) {

  var fijas = 0;
  var picas = 0;

  for (var a = 0; a<$('input').val().length; a ++) {
    if ($('input').val()[a]==randomNumber[a]){
      fijas = fijas + 1;
    } else {
      for (var b = 0; b < randomNumber.length; b++){
        if ($('input').val()[a]==randomNumber[b]) {
          picas = picas +1;
        }
      };
    };
  };

  if ( noRepeat($('input').val()) ) {

    $('.error').show();
    $('input').val('')

  } else if ( $('input').val().length < 4 || $('input').val().length > 4 ) {

    $('.error').show();
    $('input').val('')

  } else if ( $('input').val() != randomNumber ) {

    $('tbody').prepend('<tr><td>' + $('input').val() + '</td><td>' + picas + '</td><td>' + fijas + '</td></tr>');
    $('input').val('');
    $('.error').hide()

  } else if ( $('input').val() == randomNumber ) {

    $('tbody').prepend('<tr><td>' + $('input').val() + '</td><td>' + picas + '</td><td>' + fijas + '</td></tr>');
    $('.win').show();
    $('input').val('');
    $('.error').hide()

  }

  e.preventDefault();

});