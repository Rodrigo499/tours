$(document).ready(function(){
  'use strict';

  // $('div.logo img').addClass('activo');
  // $('.navegacion').show();
  // $('main article:first').addClass('activo');

  // $('.navegacion ul li a').on('click', function(e){
  //   $('.navegacion ul li a').removeClass('activo');
  //   e.preventDefault();
  //   $(this).addClass('activo');
  // });

  $('main article:first img').on('click', function(){
    $(this).attr('src', 'img/imagen_2.jpg');
  });

});