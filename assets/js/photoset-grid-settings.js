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
            var title = $( this ).find( 'img' ).attr('data-title');
            var group = $( this ).find( 'img' ).attr('data-lightbox');
            $( this ).attr('data-title', title == null ? '' : title);
            $( this ).attr('data-lightbox', group == null ? '' : group);
        });
    }
});