$(document).ready(function() {
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      //columnWidth: 30.93vw
    });
    
    $('#brand_filter').on( 'click', function() {
     var $grid = $('.grid').masonry({
              itemSelector: '.grid-item',
            });
      $grid.masonry('layout', {filter:'brand_item'});
    });
    
    $('#product_filter').on( 'click', function() {
     var $grid = $('.grid').masonry({
              itemSelector: '.grid-item',
            });
      $grid.masonry('layout', {filter:'product_item'});
    });
    
    $('#web_filter').on( 'click', function() {
     var $grid = $('.grid').masonry({
              itemSelector: '.grid-item',
            });
      $grid.masonry('layout', {filter:'web_item'});
    });
    
    $('#all_filter').on( 'click', function() {
     var $grid = $('.grid').masonry({
              itemSelector: '.grid-item',
            });
      $grid.masonry('layout', {filter:'*'});
    });
   
});

