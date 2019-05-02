window.onload = function(){

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});



// Pagina 1
  $('#btn1').click(function(e){
    $('#hoofdpagina').fadeOut('slow', function(){
        $('#pagina1').fadeIn('slow');
    });
});

$('#btn11').click(function(e){
  $('#pagina1').fadeOut('slow', function(){
      $('#hoofdpagina').fadeIn('slow');
  });
});

// Pagina 2
$('#btn2').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina2').fadeIn('slow');
  });
});

$('#btn22').click(function(e){
$('#pagina2').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});


// Pagina 3
$('#btn3').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina3').fadeIn('slow');
  });
});

$('#btn33').click(function(e){
$('#pagina3').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});


// Pagina 4
$('#btn4').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina4').fadeIn('slow');
  });
});

$('#btn44').click(function(e){
$('#pagina4').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});



// Pagina 5
$('#btn5').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina5').fadeIn('slow');
  });
});

$('#btn55').click(function(e){
$('#pagina5').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});



// Pagina 6
$('#btn6').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina6').fadeIn('slow');
  });
});

$('#btn66').click(function(e){
$('#pagina6').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});



// Pagina 7
$('#btn7').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina7').fadeIn('slow');
  });
});

$('#btn77').click(function(e){
$('#pagina7').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});



// Pagina 8
$('#btn8').click(function(e){
  $('#hoofdpagina').fadeOut('slow', function(){
      $('#pagina8').fadeIn('slow');
  });
});

$('#btn88').click(function(e){
$('#pagina8').fadeOut('slow', function(){
    $('#hoofdpagina').fadeIn('slow');
});
});



}
