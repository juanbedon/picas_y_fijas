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

$('input').on('keydown', function(e) {
  if ( $('input').val() == randomNumber ) {
    $('.win').show();
  }
});


//$('input').on('keydown', function(e) {
//  if ( e.keyCode === 13 ) {
//    console.log($('input').val())
//  }  
//});


//$('input').on('keydown', function(e) {
//  if ( e.which == 13 ) {
//    $('tbody').append('<tr><td>' + $('input').val() + '</td><td>' + 'Picas' + '</td><td>' + 'Fijas' + '</td></tr>')
//  }
//});

$('input').on('keydown', function(e) {
  if ( (e.which == 13) && ($('input').val() != randomNumber) ) {
    
  }
});

$('input').on('keydown', function(e) {
  if ( $('input').val().length > 4) {
    $('.error').show()
  }
});

$('input').on('keydown', function(e) {
  if ( $('input').val().length < 4) {
    $('.error').show()
  }
});



// EXPRESIÓN REGULAR = /(?!.*(\d).*\1)\d{4}/gm