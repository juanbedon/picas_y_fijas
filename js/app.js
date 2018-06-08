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

$('form').on('submit', function(e) {

  if ( $('input').val() == /(?!.*(\d).*\1)\d{4}/ ) {

    $('.error').show();
    $('input').val('')

  } else if ( $('input').val().length < 4 || $('input').val().length > 4 ) {

    $('.error').show();
    $('input').val('')

  } else if ( $('input').val() != randomNumber ) {

    $('tbody').prepend('<tr><td>' + $('input').val() + '</td><td>' + 'Picas' + '</td><td>' + 'Fijas' + '</td></tr>');
    $('input').val('');
    $('.error').hide()

  } else if ( $('input').val() == randomNumber ) {

    $('tbody').prepend('<tr><td>' + $('input').val() + '</td><td>' + 'Picas' + '</td><td>' + 'Fijas' + '</td></tr>');
    $('.win').show();
    $('input').val('');
    $('.error').hide()

  }

  e.preventDefault();

});