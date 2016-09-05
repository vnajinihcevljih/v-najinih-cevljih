$('.photoset-grid').photosetGrid({
    gutter: '5px', 
    highresLinks: true,
    rel: 'withhearts-gallery',
    onComplete: function(){
        // $('.photoset-grid').attr('style', '');
        // $('.photoset-grid a').colorbox({
        // photo: true,
        // scalePhotos: true,
        // maxHeight:'90%',
        // maxWidth:'90%'});
        $('.photoset-grid a').each(function() {
            $( this ).attr('data-title', $( this ).find( 'img' ).attr('data-title'));
            $( this ).attr('data-lightbox', $( this ).find( 'img' ).attr('data-lightbox'));
        });
    }
});